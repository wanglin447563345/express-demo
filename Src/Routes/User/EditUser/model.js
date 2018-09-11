const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (userId,userName,control_user) => {
    const d = await knex('user_tb').where('user_id', userId).update({
        user_name:userName,
        control_user:control_user
    });
    if(d){
        return { errno: ''};
    }
};

