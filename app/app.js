const express = require('express')
const cors = require('cors')
const router = require('../router/router')

const app = express()
// Cors middleware
app.use(cors())

// Json request
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Middleware templating
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)

// Static site for middleware use
app.use(express.static('public'))
// app.use(express.static('views'))

app.use('/', router)

module.exports = app;