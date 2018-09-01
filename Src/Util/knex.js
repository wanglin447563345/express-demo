const config = require('../Config/db');
const knex = require('knex')({
    client: 'mysql',
    debug: config.debugKnex,
    connection: config,
    pool: { min: 0, max: 5 },
});

module.exports = knex;
