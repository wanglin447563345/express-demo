const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (userName,password,control_user) => {
    const u = await knex('user_tb').where('user_name', userName).first();
    if (u) {
        return { errno: 'ERR_USER_EXITED' };
    }
    const c_time=parseInt(new Date().getTime() / 1000);
    const token=g.md5(userName+password+Math.random());
    const cu = await knex('user_tb').insert([{
        user_name:userName,
        password:g.md5(password),
        c_time:c_time,token:token,
        control_user:control_user
    }]);
    if(cu){
        return { errno: ''};
    }
    return { errno: 'UNKNOWN_ERROR'};
};


