'use strict'
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '_' + event.toISOString().split('T')[0])
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