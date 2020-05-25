const Patient = require('./patient');
const winston = require('winston');

const consoleTransport = new winston.transports.Console();
const options = {
    transports: [consoleTransport]
};
const logger = new winston.createLogger(options);

const getAllPatients = () => {
    Patient
        .fetchAll()
        .then(response => {
            console.log(response);
            logger.info('response ' + response);
            return response().toJSON();
        })
        .catch((error) => {
            logger.info('No data found' + error);
        })
};

const countPatients = () => {
    Patient
        .count()
        .then(count => {
            console.log(`There are ${count} patients`);
        }).catch(error => {
            console.log('countPatient error ', error);
    })
};

module.exports = {getAllPatients, countPatients};