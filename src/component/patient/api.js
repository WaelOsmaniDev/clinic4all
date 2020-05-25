const express = require('express'),
    router = express.Router();
const patientService = require('./service');

router.get('/', (request, response) => {
    response.json(patientService.countPatients());
});

module.exports = router;