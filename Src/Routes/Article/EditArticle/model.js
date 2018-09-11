const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (body) => {
    const d = await knex('article_tb').where('article_id', body.article_id).update({
        title:body.title,
        creator_id:body.creator_id,
        type_id:body.type_id,
        description:body.description,
        content:body.content,
        c_time:body.c_time
    });
    if(d){
        return { errno: ''};
    }
};

