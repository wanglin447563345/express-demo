const knex = require("../../../Util/knex");

exports.model = async (b) =>{
    const count = await knex("article_tb").where("type_id",b.id).count("type_id as c").first();
    if(count.c){
        const r = await knex("article_type_tb").where("id",b.id).del();
        const u = await knex("article_tb").update("type_id",1).where("type_id",b.id);
        if(r&&u){
            return {errno:''}
        }
        return {errno:"UNKNOWN_ERROR"}
    }else {
        const r = await knex("article_type_tb").where("id",b.id).del();
        if(r){
            return {errno:''}
        }
        return {errno:"UNKNOWN_ERROR"}
    }
}