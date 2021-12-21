const dotenv = require('dotenv');
const {Roles, User} = require('./models/User')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const socketio = require('socket.io')
const path = require("path");
const mongoose = require('mongoose');
const flash = require('express-flash')
const session = require('express-session')
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy
const methodOverride = require('method-override')
const UserVerification = require('./models/UserVerfication')
const nodemailer = require('nodemailer')
const http = require('http')
const server = http.createServer(app)

const io = socketio(server)

let userData = []

io.sockets.on('connection', (socket) => {
  console.log(`new connection id: ${socket.id}`);
  sendData(socket);
})


  function sendData(socket){
       socket.emit('data1', Array.from({length: 4}, () => Math.floor(Math.random() * 590)+ 10));

    setTimeout(() => {
        sendData(socket);
    }, 1000);
}

/** Setting up passport for login */
const passport = require('passport');

const {v4 : uuidv4} = require('uuid')

const mqttHandler = require('./mqtt_handler');

// Express Middleware for serving static files
app.use("/public", express.static(__dirname + "/public"));

/** Loading config */
dotenv.config({ path: './config/.env'});
const currentURL = "http://localhost:3000/"
/** Setting up Database */
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


  let mqttClient = new mqttHandler();
      mqttClient.connect();



  //res.render('./public/js/pie-chart', {rightflap: rightflap, leftflap: leftflap, rightshoulder: rightshoulder, leftshoulder: leftshoulder})


// Routes
//app.post("/send-mqtt", function(req, res) {
//  mqttClient.sendMessage(req.body.message);
//  res.status(200).send("Message sent to mqtt");
//});



/** Accept data from req variable */
app.use(express.urlencoded({extended: false}))

/** Setting up EJS */
app.set('view-engine', 'ejs')


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

});


/**
 * Routes en Authenfication for the User
 * ! This still must be placed in routes/user later on
 * todo: Resendlink needs to be added
 */

/** Nodemailer  */

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
})

transporter.verify((error, succes) => {
  if(error){
  console.log(error)
  }
  else {
    console.log('Heet luk')
    console.log(succes)
  }
})

/** Setting up flashes and session */
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))



passport.use(new localStrategy({
 usernameField: 'email'
},
function (email, password, done, res){
  User.findOne({ email : email }, function (err, user){
    if(err) { return done(err)}

    if(!user) {
      return done(null, false, {message: 'Verkeerde email'})
    }

    if(user.verified === false) { 

      console.log('niet verified')
      return done(null, false, {message: 'Niet verfieerd'})

    }

    bcrypt.compare(password, user.password, function(err, res){
      if (err) return done(err)

      if (res === false) { return done(null, false, { message: 'Verkeerde wachtwoord'} ) }

      return done(null, user)
    })
  })
}))

/** Send verification mail */
const sendVerificationEmail = ({_id, email},  res) =>  {
  const currentURL = "http://localhost:3000/"

  const uniqueString = uuidv4() + _id

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify mail",
    html: `<p> Verifieer u emailadress om in te kunnen loggen.</p>
    <p> De link is <b> Deze link geldt maar voor 6 uurtjes</b>. </p>
    <p> Klik <a href=${currentURL + "verify/" + _id + "/" + uniqueString}> Hier </a> om verder te gaan </p>`
  }

  /** Hash the uniqueString */
  const saltRounds = 10;
  bcrypt
  .hash(uniqueString, saltRounds)
  .then((hasheduniqueString) => {
    const newVerification =  new UserVerification({
      userId: _id,
      uniqueString: hasheduniqueString,
      expired_at: Date.now() + 21600000,
      created_at: Date.now(),
    })

    newVerification
    .save()
    .then(() => {
      transporter.sendMail(mailOptions)
      .then(() => {
        console.log('gestuurd')

      })
      .catch((err) => {
        console.log(err)

      })
    })
    .catch(err)
    console.log(err)
  })
  .catch(() => {
  })
}

/** Verify emai */
app.get('/verify/:userId/:uniqueString', (req, res) => {
  let {userId, uniqueString} = req.params

  UserVerification
  .find({userId})
  .then((result) => {
    if (result.length > 0){
      /** User verification bestaat */
      const {expired_at} = result[0]
      const hasheduniqueString = result[0].uniqueString

      if (expired_at < Date.now() ) {
        /** Hij is verlopen dus moet het worden verwijderd */
      UserVerification
      .deleteOne({ userId})
      .then((result => {
        User
        .deleteOne({_id: userId})
        .then(() => {

        })
        .catch(error => {
          console.log(error)
          let message = "An error occured 1"
          res.redirect(`/verified/error=true&message=${message}`)
        })
      }))
      .catch((error) => {
        console.log(error)
        let message = "An error occured 2"
        res.redirect(`/verified/error=true&message=${message}`)
      })
      } else {
        /** Valid record exist data  */
        /** First compare  the hashed uniqe string */

        bcrypt.compare(uniqueString,  hasheduniqueString)
        .then((result => {
          if (result) {
            /** String matches */
              console.log('ik kom hier langs')
            User.updateOne({_id: userId}, {verified: true})
            .then(() => {
              UserVerification
              .deleteOne({userId})
              .then(() => {
                res.render(path.join(__dirname, "./views/auth/verified.ejs"))
              })
              .catch((error) => {
                console.log(error)
                let message = "An error occured 6"
                res.redirect(`/verified/error=true&message=${message}`)
              })
            })
            .catch((error => {
            console.log(error)
            let message = "An error occured 6"
            res.redirect(`/verified/error=true&message=${message}`)
            }))
          }
          else {
            /** Existing record but incorrect  */
            let message = "An error occured 7"
            res.redirect(`/verified/error=true&message=${message}`)
          }
        }))
        .catch((error => {
          console.error(error);
          let message = "An error occured 5"
          res.redirect(`/verified/error=true&message=${message}`)
        }))
      }
    }
    /**  User verification bestaat niet */
    else {
      let message = "An error occured 3"
      res.redirect(`/verified/error=true&message=${message}`)
    }
  })
  .catch((error) => {
    console.log(error)
    let message = "An error occured4 "
    res.redirect(`/verified/error=true&message=${message}`)
  })
})



/** Verified page route */
app.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname,  "./views/auth/verified.ejs"))
})

/** Homepage */
app.get("/", function (req, res) {
    /** Get data from sensors */
    let getData = mqttClient.data();
    let rightflap = getData.rightflap;
    let leftflap = getData.leftflap;
    let rightshoulder = getData.rightshoulder;
    let leftshoulder = getData.leftshoulder;
    console.log("de waarde van dit is:", rightflap, leftflap, rightshoulder, leftshoulder);
  res.render('index.ejs', {rightflap: rightflap, leftflap: leftflap, rightshoulder: rightshoulder, leftshoulder: leftshoulder})
});

/** Login page */
app.get("/login", checkNotAutheticated, function (req, res) {
  res.render('login.ejs')
});

/** Register page */
app.get("/register", checkNotAutheticated,  function (req, res) {
  res.render('register.ejs')
});

app.get("/chart", function (req, res) {
  res.render('chart.ejs')
})

app.get("/dashboard", checkAuthenticated, authRole(Roles.ADMIN),  function (req, res) {
  res.render('dashboard.ejs')
});

app.get("/admin", checkAuthenticated, authRole(Roles.ADMIN),  function (req, res) {
  User.find({}, (function (err, users) {
    res.render('admin.ejs', { userLists: users })
  }))
});

app.get("/", checkAuthenticated, authRole(Roles.ADMIN),  function (req, res) {
  res.render('index.ejs')
});

app.get("/tips-sits", checkAuthenticated, authRole(Roles.ADMIN),  function (req, res) {
  res.render('tips-sits.ejs')
});


app.get("/personal", checkAuthenticated, authRole(Roles.ADMIN),  function (req, res) {
  res.render('personal.ejs')
});



app.post("/register", checkNotAutheticated, async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send('That user already exisits!');
    }
    else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      date_of_birth: req.body.date_of_birth,
      verified: false
    })
    await user
    .save()
    .then((result) => {
      sendVerificationEmail(result, res)

    })
    res.redirect('/login');
  }
  } catch (err) {
    res.redirect('/register');
    console.log(err)
  }
  console.log(User)
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

app.post("/login", checkNotAutheticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
})
)



passport.serializeUser(function (user, done) {
  done(null,user.id)
})

passport.deserializeUser( function (id, done) {
User.findById(id, function (err, user){
  done(err, user)
})
})

function authRole(role){
  return (req, res, next) => {
    if(req.user.roles !== role) {
      console.log(req.user.roles)
      console.log(role);
      res.status(401)
      return res.send('Je bent geen admin')
    }
    next()
  }
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkNotAutheticated(req, res, next){
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  return next()

}
