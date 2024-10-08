const express = require('express')
const { addsubpage, viewsubpage, addsubcategory, deletesubcategory, updatesubcategory, editsubpage } = require('../controllers/subcategoryController')
const router = express.Router()
router.get('/',addsubpage)
router.get('/view',viewsubpage)
router.post('/add',addsubcategory)
router.get('/delete',deletesubcategory)
router.post('/update',updatesubcategory)
router.get('/edit',editsubpage)
module.exports = router