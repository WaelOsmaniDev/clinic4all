const patientRepo = require('./repository');

const getAllPatients = () => {
    return patientRepo.getAllPatients();
};

const countPatients = () => {
    return patientRepo.countPatients();
};

module.exports = {getAllPatients, countPatients};