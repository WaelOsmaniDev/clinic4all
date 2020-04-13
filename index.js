const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = config.get('port');
const db = require('./component/patient/query');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', db.getPatients);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});