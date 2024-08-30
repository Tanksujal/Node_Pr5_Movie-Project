const express = require('express')
const router = express.Router()
router.use('/movie',require('../routes/movieroutes'))
module.exports = router