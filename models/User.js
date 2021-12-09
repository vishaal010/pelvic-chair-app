const mongoose = require('mongoose')

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
    results:[ResultSchema]
    
})




module.exports = mongoose.model('User', UserSchema);

