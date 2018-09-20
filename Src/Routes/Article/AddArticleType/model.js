const knex = require("../../../Util/knex");

exports.model = async (b) =>{

    const h = await knex("article_type_tb").where("type",b.type).count("type as c").first();
    if(h.c){
        return { errno: 'TYPE_EXITED'};
    }
    const r = await knex("article_type_tb").insert({type:b.type});
    if(r){
        return {errno:''}
    }
    return { errno: 'UNKNOWN_ERROR'};
}