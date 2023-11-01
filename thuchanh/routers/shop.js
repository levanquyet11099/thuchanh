const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/index', shopController.getIndex);

router.get('/giohang', shopController.getCart);

router.get('/dathang', shopController.getOrders);

router.get('/thanhtoan', shopController.getCheckout);

router.get('/sanpham',shopController.getProducts);


module.exports = router;