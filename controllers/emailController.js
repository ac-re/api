'use strict'
const nodemailer = require('nodemailer')
const config = require('../helpers/config')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.emailserver,
        pass: config.password
    },
})

const debugView = (req, res, next) => {
    res.render('layout')
}

const sendEmail = (req, res, next) => {
    //res.send('call send Email api')
    try {
        const { data } = req.body
        console.log(req)
        const files = req.files
        if (data) {
            const email = JSON.parse(data)
            const mailOptions = {
                from: config.emailserver,
                to: config.emailto,
                //cc: 
                subject: email.subject,
                attachments: files,
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.status(400).send(err)
                } else {
                    res.status(200).send('Email Send: ' + info.response)
                }
            })
        } else {
            res.status(400).send('no data: ' + JSON.stringify(req))
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    sendEmail,
    debugView
}