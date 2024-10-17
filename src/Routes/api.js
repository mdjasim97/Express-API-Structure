
const express = require('express')
const router = express.Router()

const HelloController = require('../Controller/HelloController')


router.get('/helloApi', HelloController.HelloApiController)
router.post('/helloApiPost', HelloController.HelloApiPost)

module.exports= router