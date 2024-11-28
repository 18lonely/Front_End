const axios = require('axios')
require('dotenv').config()

const postRegister = async (body) => {
    const result = await axios.post(process.env.url + '/users/register', {
        username: body.username,
        password: body.password,
        email: body.email,
        phonenumber: body.phonenumber,
        address: "",
        datestart: ""
    })

    return result
}

const postLogin = async (body) => {
    const result = await axios.post(process.env.url + '/users/login', {
        email: body.email,
        password: body.password
    })

    console.log(result)

    return result
}

module.exports = {postRegister, postLogin}