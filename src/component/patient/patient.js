const bookshelf = require('../../../config/bookshelf');

const Patient = bookshelf.model('Patient', {
    tableName: 'core.patient',
});

module.exports = Patient;