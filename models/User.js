const mongoose = require("mongoose");

const ROLES = {
  ADMIN: "admin",
  BASIC: "basic",
};

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  date_of_birth: {
    type: Date,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  verified: {
    type: Boolean,
  },

  roles: {
    type: String,
    default: ROLES.ADMIN,
  },

});

const chairDataSchema = new mongoose.Schema({
  /**
   * chair_data table
   */
  date_time: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  avg_voltage_vol_1: {
    type: Number,
    required: true,
  },

  avg_voltage_vol_2: {
    type: Number,
    required: true,
  },

  avg_voltage_vol_3: {
    type: Number,
    required: true,
  },

  avg_voltage_vol_4: {
    type: Number,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }



  // chair_part: {
  //   type: Number,
  //   required: true,
  // },
});

/**
 * results table
 */
const resultsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

/**
* achievements table
*/
const achievementsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

/**
 * achievements_users table
 */
const achievementUsersSchema = new mongoose.Schema({
  achievements: [achievementsSchema],
});




  /**
   * Relational data:
   * A user can have chair_data, results, and achievements.
   * Note: Every relation is a one-to-many relationship in MongoDB
   * For reference check out the ERD provided in models/erd-pelvic-chair.png
   */
  // chair_data: [chairDataSchema],
  // results: [resultsSchema],
  // achievements: [achievementUsersSchema],
  // chair_data: [chairDataSchema],


const User = mongoose.model("User", usersSchema);
const chairData = mongoose.model("chairData", chairDataSchema)
const Roles = ROLES;


module.exports = { Roles, User, chairData};
