require('dotenv').config();
const convict = require('convict');
const convict_format_with_validator = require('convict-format-with-validator')
convict.addFormats(convict_format_with_validator)

const config = convict({
    env: {
        doc: "The application environment.",
        format: ['prod', 'dev', 'test'],
        default: 'dev',
        arg: 'nodeEnv',
        env: 'NODE_ENV'
    },
    ip: {
        doc: "The IP address to bind.",
        format: "ipaddress",
        default: "127.0.0.1"
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 3000
    },
    database: {
        user: {
            format: String,
            default: undefined
        },
        pass: {
            format: String,
            default: undefined
        },
        host: {
            format: "ipaddress",
            default: "127.0.0.1"
        },
        port: {
            format: "port",
            default: "5432"
        },
        database_name: {
            format: String,
            default: "clinic4all"
        },
        client: {
            format: String,
            default: "pg"
        },
        charset: {
            format: String,
            default: "utf8"
        }
    }
});

const env = config.get('env');
config.loadFile(__dirname + `/config/${env}.json`);

config.validate({strict:true});

module.exports = config;