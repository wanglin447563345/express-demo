
const knex = require('../../../Util/knex');

exports.model = async (body) => {
    console.log(body)
    const d = await knex('article_tb').where('article_id',body.article_id).del();
    if(d){
        return { errno: ''};
    }
};

