const express = require('express');

const router = express.Router();

const authController= require('../controller/authController')

router.get('/sign-up', authController.getSignup)
router.post('/sign-up', authController.postSignup)

module.exports = router;