const express = require('express')
const {getHomeHandler, getLoginHandler, getRegisterHandler, postLoginHandler, postRegisterHandler, getLogoutHandler} = require('../handles/userHandler')
let session = require('express-session')
const { postRegister } = require('../services/userService')
const router = express.Router()
require('dotenv').config()

router.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
}))

router.get('/', getHomeHandler)

router.get('/login', getLoginHandler)

router.post('/login', postLoginHandler)

router.get('/register', getRegisterHandler)

router.post('/register', postRegisterHandler)

router.get('/logout', getLogoutHandler)

module.exports = router