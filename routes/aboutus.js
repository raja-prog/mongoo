const express = require('express');

const aboutusController = require('../controller/companiesController')

const router = express.Router();

router.get('/about-us', aboutusController.getAboutus)

router.get('/get-companies', aboutusController.getcompanies)

router.post('/create-company', aboutusController.getnewcompanies)

router.put('/update-company/:id', aboutusController.updatecompanies)

router.delete('/delete-company/:id', aboutusController.deletecompanies)

module.exports = router;