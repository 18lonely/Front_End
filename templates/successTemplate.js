const successTemplate = (res, pagename, title, message, session) => {
    res.render(pagename, {
        title: title,
        message: message,
        session: session
    })
}

module.exports = successTemplate