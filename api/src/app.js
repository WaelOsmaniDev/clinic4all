const express = require('express');
const config = require('../config');
const app = express();
const port = config.get('port');
const db = require('./component/patient/repository');
const patientApi = require('./component/patient/api');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/patient', patientApi);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});