const bookshelf = require('../../../config/bookshelf');

const PatientModel = bookshelf.model('PatientModel', {
    tableName: 'core.patient',
});

module.exports = PatientModel;