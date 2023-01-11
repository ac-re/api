'use strict'
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().split('T')[0] + '_' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    // if (['application/pdf'].includes(file.mimetype)) {
        cb(null, true)
    // } else {
    //  cb(null, false)
    // }
}

const upload = multer({storage, fileFilter})
module.exports = { 
    upload 
}