const express = require('express');

const UserController = require('../controller/UserController')

const aboutusController = require('../controller/companiesController')

const router = express.Router();

// router.get('/about-us', aboutusController.getAboutus)

router.get('/get-companies', aboutusController.getcompanies)

router.post('/add-company', aboutusController.getnewcompanies)

router.put('/update-company/:id', aboutusController.updatecompanies)

router.delete('/remove-company/:id', aboutusController.deletecompanies)

router.post('/add-user', UserController.adduser)

router.put('/update-user/:id', UserController.updateUsers)

router.get('/get-users', UserController.getUsers)

router.delete('/remove-user/:id', UserController.removeusers)

module.exports = router;