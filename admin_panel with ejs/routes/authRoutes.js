const express = require('express')
const { dashboardPage,loginPage,registerPage,registeruser ,Loginuser } = require('../controllers/authController')
const { IsLoggedin, IsNotlogin } = require('../middlewares/authmiddleware')
const router = express.Router()
router.get('/',IsNotlogin,loginPage)
router.get('/register',IsNotlogin,registerPage)
router.get('/dashboard',IsLoggedin,dashboardPage)
router.post('/registeruser',registeruser )
router.post('/Loginuser',Loginuser)
module.exports = router