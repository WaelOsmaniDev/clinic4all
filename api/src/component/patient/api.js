const express = require('express');
const router = express.Router();
const patientService = require('./service');
const logger = require('simple-node-logger').createSimpleLogger();

router.get('/', (request, response) => {
    patientService.getAllPatients(response);
});

router.post('/save', (request, response) => {
    patientService.savePatient(request.body)
        .then(r => {
            logger.info('/save success');
            response.sendStatus(200);
        })
        .catch(error => {
            logger.error('/save ', error)
            console.log('error', error);
        });
});

module.exports = router;