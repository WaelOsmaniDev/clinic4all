const patientRepo = require('./repository');

const getAllPatients = (response) => {
    return patientRepo.getAllPatients(response);
};

const countPatients = () => {
    return patientRepo.countPatients();
};

const savePatient = (patient) => {
    return patientRepo.savePatient(patient);
}

module.exports = {getAllPatients, countPatients, savePatient};