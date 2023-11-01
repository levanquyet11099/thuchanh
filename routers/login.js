const path = require('path');
const express = require('express');

const admincontroller = require('../controllers/login');
const router = express.Router();

router.get('/',admincontroller.renderpage);

router.post('/', admincontroller.loginpage);

router.get('/login/singup', admincontroller.singupaccountpage);

router.post('/login/singup', admincontroller.postsngupaccountpage);

module.exports = router;