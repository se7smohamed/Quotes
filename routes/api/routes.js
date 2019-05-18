const router = require('express').Router()
const Thought = require('../../models/thought')


//get random quote
router.get('/', (req, res)=>{
    Thought.countDocuments().then( count => { 
        Thought
            .findOne()
            .skip( count * Math.random() ) // number of docs * random
            .then( data => {
                res.json(data)
            })
    })
})

//get quote by id
router.get('/:id', (req, res)=>{
    Thought
        .findOne({_id: req.params.id})
        .then( data => {
            res.json(data)
        })
})


// post new quote
router.post('/', (req, res)=>{
    console.log(req.body)
    const newThought = new Thought({
        quote: req.body.quote,
        by: req.body.by,
    })
    newThought
        .save()
        .then( newThought => res.json({succ: true, ...newThought}) )
})


module.exports = router