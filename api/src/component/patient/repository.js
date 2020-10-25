const PatientModel = require('./patientModel');
const logger = require('simple-node-logger').createSimpleLogger();

const getAllPatients = (response) => {
    PatientModel
        .fetchAll()
        .then(patients => {
            response.json({patients});
        })
        .catch((error) => {
            logger.error('No data found', error);
        })
};

const countPatients = (response) => {
    PatientModel
        .count()
        .then(count => {
            response.json({count});
        }).catch(error => {
        logger.error('No data found', error);
    })
};

const savePatient = async (patient) => {
    logger.info('patient: ', patient);
    try {
        PatientModel.forge({
            'first_name': patient.first_name,
            'last_name': patient.last_name,
            'sex': patient.sex,
            'birth_date': patient.birth_date,
            'father_name': patient.father_name,
            'mother_name': patient.mother_name,
            'insurance': patient.insurance,
            'mobile_number': patient.mobile_number,
            'street': patient.street,
            'city': patient.city,
            'country': patient.country,
            'created_at': new Date(),
            'updated_at': new Date()
        }).save();
    } catch (e) {
        logger.error('Failed to save data:', e);
    }
}

module.exports = {getAllPatients, countPatients, savePatient};