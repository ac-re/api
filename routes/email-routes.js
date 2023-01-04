'use strict'

const express = require('express')
const { sendEmail, debugView } = require('../controllers/emailController')
const { upload } = require('../helpers/filehelper')

const router = express.Router()

router.get('/debug', debugView)

router.post('/sendemail', (req, res) => {
    res.send('POST request to sendEmail')
})

router.post('/send-attachment', upload.array('files'), sendEmail)

module.exports = {
    routes: router
}