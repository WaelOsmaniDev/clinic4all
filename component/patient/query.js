const config = require('../../config');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: config.get('database.user'),
    password: config.get('database.pass'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    database: config.get('database.database_name'),
});

const getPatients = (request, response) => {
    pool.query('SELECT * FROM core.patient ORDER BY last_name ASC, first_name ASC',
        (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

module.exports = {getPatients};