/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createSchema('core', {ifNotExists: true});
    pgm.createType('sex', ['male', 'female']);
    pgm.createTable({schema: 'core', name: 'patient'}, {
            id: {type: 'UUID', default: pgm.func('public.uuid_generate_v4()'), primaryKey: true},
            first_name: {type: 'varchar(100)', notNull: true},
            last_name: {type: 'varchar(100)', notNull: true},
            sex: {type: 'sex', notNull: true},
            birth_date: {type: 'date', notNull: true},
            father_name: {type: 'varchar(100)', notNull: true},
            mother_name: {type: 'varchar(100)', notNull: true},
            insurance: {type: 'varchar(100)', notNull: true},
            mobile_number: {type: 'varchar(100)', notNull: true},
            street: {type: 'varchar(1000)'},
            city: {type: 'varchar(100)'},
            country: {type: 'varchar(100)'},
            created_at: {
                type: 'timestamp',
                notNull: true,
                default: pgm.func('current_timestamp'),
            },
            updated_at: {
                type: 'timestamp',
                notNull: true,
                default: pgm.func('current_timestamp'),
            },
        },
        {ifNotExists: true});
    // pgm.createIndex('patients');
};

exports.down = pgm => {
    pgm.dropTable({schema: 'core', name: 'patient'}, {ifExists: false});
    pgm.dropType('sex');
    pgm.dropSchema('core', {ifExists: true})
};
