
const dotenv = require('dotenv');



const User = require('./models/User')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require('mongoose');
const flash = require('express-flash')
const session = require('express-session')
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy
const methodOverride = require('method-override')
const UserVerification = require('./models/UserVerfication')
const nodemailer = require('nodemailer')



/** Setting up passport for login */
const passport = require('passport');

const {v4 : uuidv4} = require('uuid')

const mqttHandler = require('./mqtt_handler');


/** Loading config */
dotenv.config({ path: './config/.env'});

/** Setting up Database */
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});


    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../public/css/style.css" rel="stylesheet">
</head>

<header>
 
</header>

<body id="page-top">
   


app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

    <!-- Page Wrapper -->
    <div id="wrapper">


        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


let mqttClient = new mqttHandler();
    mqttClient.connect();



// Routes
//app.post("/send-mqtt", function(req, res) {
//  mqttClient.sendMessage(req.body.message);
//  res.status(200).send("Message sent to mqtt");
//});

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Pelvic chair</div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">


            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">



/** Accept data from req variable */
app.use(express.urlencoded({extended: false}))

/** Setting up EJS */
app.set('view-engine', 'ejs')




    // do whatever you like here
    let getData = mqttClient.data();
    let rightflap = getData.rightflap;
    let leftflap = getData.leftflap;
    let rightshoulder = getData.rightshoulder;
    let leftshoulder = getData.leftshoulder;
    console.log("de waarde van dit is:", rightflap, leftflap, rightshoulder, leftshoulder);



  res.render('index.ejs', {leftflap: leftflap, rightflap: rightflap, rightshoulder: rightshoulder, leftshoulder: leftshoulder});
}); 

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>


                 <!-- Nav Item - Charts -->
                 <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Achievements</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
                <!-- tips and sits-->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/tips-sits" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Tips and Sits</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>


            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Settings</span>
                </a>

                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="/login">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <a class="nav-link" href="/login">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Login</span></a>
            </li>
             <!-- Nav Item - Tables -->
             <li class="nav-item">
              <a class="nav-link" href="tables.html">
                  <i class="fas fa-fw fa-table"></i>
                  <span>Registratie</span></a>
          </li>


            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

            
                    <!-- Topbar Navbar -->
            

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                    <!-- Content Row -->

                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                   
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pie Chart -->
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Content Column -->
                        <div class="col-lg-6 mb-4">

                            <!-- Project Card Example -->

                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small font-weight-bold">Server Migration <span
                                            class="float-right">20%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Sales Tracking <span
                                            class="float-right">40%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Customer Database <span
                                            class="float-right">60%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style="width: 60%"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Payout Details <span
                                            class="float-right">80%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Account Setup <span
                                            class="float-right">Complete!</span></h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            Primary
                                            <div class="text-white-50 small">#4e73df</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-success text-white shadow">
                                        <div class="card-body">
                                            Success
                                            <div class="text-white-50 small">#1cc88a</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Info
                                            <div class="text-white-50 small">#36b9cc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-warning text-white shadow">
                                        <div class="card-body">
                                            Warning
                                            <div class="text-white-50 small">#f6c23e</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-danger text-white shadow">
                                        <div class="card-body">
                                            Danger
                                            <div class="text-white-50 small">#e74a3b</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-secondary text-white shadow">
                                        <div class="card-body">
                                            Secondary
                                            <div class="text-white-50 small">#858796</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-light text-black shadow">
                                        <div class="card-body">
                                            Light
                                            <div class="text-black-50 small">#f8f9fc</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-dark text-white shadow">
                                        <div class="card-body">
                                            Dark
                                            <div class="text-white-50 small">#5a5c69</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6 mb-4">

                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-center">
                                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                            src="img/undraw_posting_photo.svg" alt="...">
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>


                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div class="card-body">
                                    <p>Pelvic Chair 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classes are used to create
                                        custom components and custom utility classes.</p>
                                    <p class="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classes.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>

    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">

                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="/logout">Logout</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>



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

    if(user.verified === false) { 
      console.log('niet verified')
      return done(null, false, {message: 'Niet verfieerd'})

    }
    if(!user) {
      return done(null, false, {message: 'Verkeerde email'})
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

app.get("/", checkAuthenticated, function (req, res) {
  res.render('index.ejs', { name: req.user.name })
});

app.get("/login", checkNotAutheticated, function (req, res) {
  res.render('auth/login.ejs')
});

app.get("/register", checkNotAutheticated,  function (req, res) {
  res.render('auth/register.ejs')
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

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.ejs");
});

passport.serializeUser(function (user, done) {
  done(null,user.id)
})  

passport.deserializeUser( function (id, done) {
User.findById(id, function (err, user){
  done(err, user)
})
})

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






</html>
