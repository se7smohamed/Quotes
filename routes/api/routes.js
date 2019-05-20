const router = require('express').Router()
const Quote = require('../../models/Quote')


//delete everything

router.get('/del', (req, res)=>{
    Quote.deleteMany({}, ()=>{
        res.send('deleted all')
        console.log('del all')
    })
})

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


module.exports = router