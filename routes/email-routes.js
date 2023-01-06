'use strict'

const express = require('express')
const { careerForm, contactForm, debugView } = require('../controllers/emailController')
const { upload } = require('../helpers/filehelper')

const router = express.Router()

router.get('/debug', debugView)

router.get('/test', (req, res) => {
    res.send('get success')
})

router.post('/contact-form', contactForm)

router.post('/career-form', upload.array('files'), careerForm)

module.exports = {
    routes: router
}