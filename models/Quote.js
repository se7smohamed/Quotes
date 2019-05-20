const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    by: {
        type: String,
        default: 'unknown'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('quote', QuoteSchema)