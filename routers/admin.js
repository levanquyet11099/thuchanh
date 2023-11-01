const path = require('path');
const express = require('express');

const admincontroller = require('../controllers/admin');
const router = express.Router();



router.get('/add-product',admincontroller.getAddProduct);

router.get('/product',admincontroller.getProducts);

router.post('/add-product', admincontroller.postAddProduct);

//router.get('/admin',admincontroller.dangnhap);



//router.post('/', admincontroller.dangnhap);


module.exports = router;