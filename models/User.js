const mongoose = require('mongoose')

const ROLES = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

const ResultSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    verified: {
        type: Boolean
    },
    roles: {
        type: String,
        default: ROLES.ADMIN
    },

    results:[ResultSchema]
    
})


const User = mongoose.model('User', UserSchema);
const Roles = ROLES

module.exports = {Roles, User}
