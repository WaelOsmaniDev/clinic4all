const PatientModel = require('./patientModel');
const winston = require('winston');
const knex = require('../../../config/bookshelf').knex;

const consoleTransport = new winston.transports.Console();
const options = {
    transports: [consoleTransport]
};
const logger = new winston.createLogger(options);

const getAllPatients = () => {
    PatientModel
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
    PatientModel
        .count()
        .then(count => {
            console.log(`There are ${count} patients`);
        }).catch(error => {
            console.log('countPatient error ', error);
    })
};

const savePatient = (patient) => {
    try {
        PatientModel.forge({
            'first_name': patient.firstName,
            'last_name': patient.lastName,
            'sex': patient.sex,
            'birth_date': patient.birthDate,
            'father_name': patient.fatherName,
            'mother_name': patient.motherName,
            'insurance': patient.insurrance,
            'mobile_number': patient.mobileNumber,
            'street': patient.street,
            'city': patient.city,
            'country': patient.country,
            'created_at': new Date(),
            'updatedAt': new Date()}).save();
    } catch (e) {
        console.log(`Failed to save data: ${e}`);
    } finally {
        knex.destroy();
    }
}

module.exports = {getAllPatients, countPatients, savePatient};