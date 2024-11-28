let session = require("express-session")
const isEmpty = require('../utillities/util')
const messages = require('../utillities/messages')
const {validateResgitration, validateLogin} = require('../validation/validation')
const {postRegister, postLogin} = require('../services/userService')
const sucessTemplate = require('../templates/successTemplate')
const errorTemplate = require('../templates/errorTemplate')

const getHomeHandler = (req, res) => {
    session = req.session
    return sucessTemplate(res, 'home', 'Home', null, session) 
}

const getLoginHandler = (req, res) => {
    session = req.session
    return sucessTemplate(res, 'login', 'Login', null, session)
}

const getRegisterHandler = (req, res) => {
    session = req.session
    return sucessTemplate(res, 'register', 'Resgister', null, session)
}

const getLogoutHandler = (req, res) => {
    req.session.destroy(null)
    return sucessTemplate(res, 'home', 'Home', null, null)
}

const postLoginHandler = async (req, res) => {
    try {
        session = req.session
        const errors = validateLogin(req.body);
        if(isEmpty(errors)) {
            const result = await postLogin(req.body)
            session.name = result.data.user.username
            session.logged = result.data.logged
            session.token = result.data.token
            return sucessTemplate(res, 'home', 'Home', result.data.message, session)
        } else {
            return errorTemplate(req, res, 'login', 'Login', messages.LOGIN_FAILED, errors)
        }
    } catch(err) {
        return errorTemplate(req, res, 'login', 'Login', err.response.data.error.message, errors)
    }
}

const postRegisterHandler = async (req, res) => {
    try {
        session = req.session
        const errors = validateResgitration(req.body)
        if(isEmpty(errors)) {
            const result = await postRegister(req.body)
            return sucessTemplate(res, 'login', 'Login', result.data.message, session)
        } else {
            return errorTemplate(req, res, 'register', 'Register', messages.REGISTER_FAILED, errors)
        }
    } catch (err) {
        return errorTemplate(req, res, 'register', 'Register', messages.REGISTER_FAILED)
    }
}

module.exports = {
    getHomeHandler,
    getLoginHandler, 
    getRegisterHandler, 
    getLogoutHandler,
    postLoginHandler,
    postRegisterHandler
}