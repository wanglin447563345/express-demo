
const knex = require('../../Util/knex');
const g = require('../../Util/global');

exports.login = async (userName, password) => {
    const u = await knex('user_tb').select('user_id', 'password', 'token').where('user_name', userName).first();
    if (!u || g.md5(password) !== u.password) {
        return { errno: 'ERR_USER_LOGIN' };
    }

    const ret = {
        user_id: u.user_id,
        token: u.token,
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
