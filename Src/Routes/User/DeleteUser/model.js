const knex = require('../../../Util/knex');

exports.model = async (userId) => {
    const d = await knex('user_tb').where('user_id', userId).del();
    if(d){
        return { errno: ''};
    }
    return { errno: 'UNKNOWN_ERROR'};
};

