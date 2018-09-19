const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (page,rows,userName) => {
    let count;
    if(userName){
        count = await knex('user_tb').where({'user_name': userName}).count('user_id as c').first();
    }else {
         count = await knex('user_tb').count('user_id as c').first();
    }
    const ret = g.pagination(count.c, page, rows);

    if (count.c === 0) {
        ret.data = [];
    } else {
        if(userName){
            ret.data = await knex
                .select('user_id', 'user_name', 'c_time', 'm_time')
                .from('user_tb as i')
                .where('user_name', userName)
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('user_id', 'desc');
        }else {
            ret.data = await knex
                .select('user_id', 'user_name', 'c_time', 'm_time')
                .from('user_tb as i')
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('user_id', 'desc');
        }

    }
    return { errno: '', data: ret };
};

