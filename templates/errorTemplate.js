const errorTemplate = (req, res, pagename, title, message, errors) => {
    res.render(pagename, {
        title: title,
        body: req.body,
        errs : errors,
        message: message
    })
}

module.exports = errorTemplate