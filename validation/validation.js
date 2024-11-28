const validateResgitration = (body) => {
    let errors = {}

    if(!body.username || body.username.trim().length < 2 || !/^[A-Za-z]+$/.test(body.username.trim())) {
        errors.usernameMsg = "Username is required"
    }
    if(!body.password || body.password.trim().length == 0 || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(body.password.trim())) {
        errors.passwordMsg = "Invalid password format"
    }
    if(!body.comfirmPassword || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(body.comfirmPassword.trim())) {
        errors.comfirmPasswordMsg = "Invalid password format"
    }
    if(body.comfirmPassword != body.password) {
        errors.comfirmPasswordMsg = "Password not match"
    }
    if(!body.email || body.email.trim().length == 0 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(body.email.trim())) {
        errors.emailMsg = "Invalid Email Address"
    }
    if(!body.phonenumber || body.phonenumber.trim().length == 0 || !/^0[2-9]\d{1,2}\d{7}$/.test(body.phonenumber.trim())) {
        errors.phonenumberMsg = "Invalid Phonenumber"
    }
    return errors
}

const validateLogin = (body) => {
    let errors = {}

    if(!body.email || body.email.trim().length == 0 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(body.email.trim())) {
        errors.emailMsg = "Invalid Email Address"
    }

    if(!body.password || body.password.trim().length == 0 || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(body.password.trim())) {
        errors.passwordMsg = "Invalid password format"
    }

    return errors
}

module.exports = {validateResgitration, validateLogin}