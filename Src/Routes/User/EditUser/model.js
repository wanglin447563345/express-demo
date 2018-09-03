const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (userId,userName,password,control_user) => {
    const d = await knex('user_tb').where('user_id', userId).update({
        user_name:userName,
        password:g.md5(password),
        control_user:control_user
    });
    if(d){
        return { errno: ''};
    }
};

