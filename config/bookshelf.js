const config = require('../config');
const dbConfig = config.get('database');
const knex = require('knex')({
    client: dbConfig.client,
    connection: {
        host     : dbConfig.host,
        user     : dbConfig.user,
        password : dbConfig.pass,
        database : dbConfig.database_name,
        charset  : dbConfig.charset,
    }
});

module.exports = require('bookshelf')(knex);