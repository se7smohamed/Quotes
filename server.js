const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const db = `mongodb+srv://${config['user']}:${config['pass']}@thought-v8dje.mongodb.net/test?retryWrites=true`

const quote = require('./routes/api/routes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.end('get /////'))

mongoose
    .connect(db, { useNewUrlParser: true })
    .then()
    .catch( e => console.log(`Error connecting to db: ${e}`))


app.use('/api/quote/', quote)
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))