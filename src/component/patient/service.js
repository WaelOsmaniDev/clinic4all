const patientRepo = require('./repository');

const getAllPatients = () => {
    return patientRepo.getAllPatients();
};

const countPatients = () => {
    return patientRepo.countPatients();
};

const savePatient = (patient) => {
    return patientRepo.savePatient(patient);
}

module.exports = {getAllPatients, countPatients, savePatient};