const config = require('./config/db');
const knex = require('knex')({
    client: 'mysql',
    debug:true,
    connection: config,
    pool: { min: 0, max: 5}
});

module.exports = knex;

