const knex = require('../../../Util/knex');

exports.model = async (body) => {
    const c_time=parseInt(new Date().getTime() / 1000);
    const d = await knex('article_tb').where('article_id', body.article_id).update({
        title:body.title,
        // creator_id:body.creator_id,
        type_id:body.type_id,
        description:body.description,
        content:body.content,
        c_time:c_time
    });
    if(d){
        return { errno: ''};
    }
    return { errno: 'UNKNOWN_ERROR'};
};

