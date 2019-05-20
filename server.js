const express = require('express')
const mongoose = require('mongoose')
const connString = require('./config')

const quote = require('./routes/api/routes')

const app = express()
app.use(express.json())


// connection string to db
mongoose
    .connect(connString, { useNewUrlParser: true })
    .then()
    .catch( e => console.log(`Error connecting to db: ${e}`))


app.use('/api/quote/', quote)
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))