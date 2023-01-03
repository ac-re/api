'use strict'

const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const { PORT, HOST, HOST_URL, EMAIL_SERVER, EMAIL_TO, PASSWORD, API_URL } = process.env
assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    emailserver: EMAIL_SERVER,
    emailto: EMAIL_TO,
    password: PASSWORD,
    apiUrl: API_URL,
}