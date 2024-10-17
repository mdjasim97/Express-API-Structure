const express = require('express')
const router = require('./src/Routes/api')
const app = new express()



app.use('/', router)


// Undefined route
app.use('*', (req, res) => {
    res.status(404).send({ status: "failed", message: "something is wrong. try again" })
})


module.exports = app