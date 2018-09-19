const knex = require("../../../Util/knex");

exports.model = async (b) =>{
    const r = await knex("article_type_tb").insert({type:b.type});
    if(r){
        return {errno:''}
    }
    return { errno: 'UNKNOWN_ERROR'};
}