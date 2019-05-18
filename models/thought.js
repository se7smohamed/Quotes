const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    by: {
        type: String,
        default: 'guest'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('thought', thoughtSchema)