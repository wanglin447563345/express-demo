const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (b) => {
    const u = await knex('user_tb').where("user_id",b.user_id).select("*");
    if (dg.md5(b.password) !== u.password) {
        return { errno: 'ERR_USER_LOGIN' };
    }

    const ret = {
        user_id: u.user_id,
        token: u.token,
    };
    return { errno: '', data: ret };
};
