const knex = require("../../../Util/knex");

exports.model = async (b) =>{
    const h = await knex("article_type_tb").where("type",b.type).count("type as c").first();
    if(h.c){
        return { errno: 'TYPE_EXITED'};
    }
    const r = await knex("article_type_tb").update("type",b.type).where("id",b.id)
    if(r){
        return {errno:''}
    }
    return {errno:"KNOWN_ERROR"}
};