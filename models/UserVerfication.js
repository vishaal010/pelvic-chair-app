const mongoose = require('mongoose')


const UserVerficationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    uniqueString: {
        type: String,
        required: true
    },
    expired_at: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    
})


module.exports = mongoose.model('UserVerfication', UserVerficationSchema);