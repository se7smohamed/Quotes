const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

let mongoURI
if (process.env.NODE_ENV === 'production' ){
    mongoURI = process.env.connString
}else{
    mongoURI = 'mongodb://127.0.0.1:27017/kuot'
}
const quote = require('./routes/api/routes')
const app = express()
app.use(express.json())


// connection string to db
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .catch( e => console.log(`Error connecting to db: ${e}`))


app.use('/api/quote/', quote)
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production'){
    app.use( express.static('client/build') )
    app.get('*', (req, res) => {
        res.sendFile( path.join(__dirname, 'client', 'build', 'index.html') )
    })
}

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))