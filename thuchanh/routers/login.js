const path = require('path');
const express = require('express');

const admincontroller = require('../controllers/login');
const router = express.Router();

router.get('/',admincontroller.renderpage);

router.post('/', admincontroller.loginpage);

module.exports = router;