const express = require('express')
const {  resetpasspage, otppage, sendmail, receiveOtp, SetPassword } = require('../controllers/forgotController')
const { IsTokenForReset } = require('../middlewares/authmiddleware')
const router = express.Router()
router.post('/sendmail',sendmail)
router.get('/resetpasspage',IsTokenForReset,resetpasspage)
router.get('/otppage',IsTokenForReset,otppage)
router.post('/receiveOtp',receiveOtp)
router.post('/SetPassword',SetPassword)
module.exports = router