const express = require('express')
const mongoose = require('mongoose')
const connString = require('./config')
const serverless = require('serverless-http');
const cors = require("cors");


const quote = require('./routes/api/routes')

const app = express()
app.use(cors)
app.use(express.json())


// connection string to db
mongoose
    .connect(connString, { useNewUrlParser: true })
    .then()
    .catch( e => console.log(`Error connecting to db: ${e}`))


app.use('/.netlify/functions/api/quote/', quote)
module.exports.handler = serverless(app)