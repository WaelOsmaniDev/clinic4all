const express = require('express');
const router = express.Router();
const patientService = require('./service');

router.get('/', (request, response) => {
    response.json(patientService.countPatients());
});

router.post('/save', (request, response) => {
    patientService.savePatient(request.body)
    response.sendStatus(200);
});

module.exports = router;