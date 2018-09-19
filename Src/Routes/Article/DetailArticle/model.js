const knex = require('../../../Util/knex');

exports.model = async (b) =>{
    const d = await knex("article_tb").select("*").where("article_id",b.article_id);
    if(d){
        return {errno:'', data:d}
    }
    return { errno: 'UNKNOWN_ERROR'};
}