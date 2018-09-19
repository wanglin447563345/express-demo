const knex = require("../../../Util/knex");
const g = require("../../../Util/global");

exports.model = async (body) =>{
    const c_time=parseInt(new Date().getTime() / 1000);
    const ca = await knex("article_tb").insert({
        title:body.title,
        creator_id:body.creator_id,
        type_id:body.type_id,
        description:body.description,
        content:body.content,
        c_time:c_time
    });
    if(ca){
        return { errno: ''};
    }
    return { errno: 'UNKNOWN_ERROR'};
};