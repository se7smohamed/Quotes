const router = require('express').Router()
const Quote = require('../../models/Quote')

//get random quote
router.get('/', (req, res)=>{
    Quote.countDocuments().then( count => { 
        Quote
            .findOne()
            .skip( count * Math.random() ) // number of docs * random
            .then( data => {
                res.json(data)
            })
    })
})

//get quote by id
router.get('/:id', (req, res)=>{
    Quote
        .findOne({_id: req.params.id})
        .then( data => {
            res.json(data)
        })
})

//delete quote by id
router.delete('/:id', (req, res)=>{
    console.log('hit')
    Quote
        .deleteOne({_id: req.params.id})
        .then( data => {
            console.log(data)
            res.json(data)
        })
})

// post new quote
router.post('/', (req, res)=>{
    console.log(req.body)
    const newQuote = new Quote({
        quote: req.body.quote,
        by: req.body.by,
    })
    newQuote
        .save()
        .then( newQuote => res.json({succ: true, ...newQuote}) )
})


// post vote on quote
router.post('/vote', (req, res)=>{
    let id = req.body.id,
    type = req.body.type
    Quote.findOneAndUpdate({_id: id}, {$inc: {votes: type}}, {useFindAndModify: false, new: true})
        .then( quote => {
            res.json(quote)
        }).catch( e => console.log(e) )
})


module.exports = router