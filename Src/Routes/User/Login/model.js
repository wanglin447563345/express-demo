const knex = require('../../../Util/knex');

exports.model = async (userName, password) => {
    const u = await knex('user_tb').select('user_id', 'password', 'token','control_user',"user_name").where('user_name', userName).first();
    if (!u || password !== u.password) {
        return { errno: 'ERR_USER_LOGIN' };
    }

    const ret = {
        user_id: u.user_id,
        token: u.token,
        control_user:u.control_user,
        user_name:u.user_name
    };
    return { errno: '', data: ret };
};


// exports.minutes = async () => {
//     console.log('hello minutes');
//
//     const u = await knex('user_tb').select('user_id', 'token', 'user_name', 'company_id', 'mobile', 'email').where('user_id', 1).first();
//
//     if (!u) {
//         return { errno: 'ERR_USER_NOT_EXISTS' };
//     }
//
//     return { errno: '', data: u };
// };
