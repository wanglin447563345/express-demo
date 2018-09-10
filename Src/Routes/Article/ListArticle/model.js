const knex = require('../../../Util/knex');
const g = require("../../../Util/global");

exports.model = async (page,rows,title, type_id) => {
    let count;
    if(title){
        count = await knex('article_tb').where({'title': title}).count('article_id as c').first();
    }else if(type_id){
        count = await knex('article_tb').where({'type_id': type_id}).count('article_id as c').first();
    }else {
        count = await knex('article_tb').count('article_id as c').first();
    }

    const ret = g.pagination(count.c, page, rows);

    if (count.c === 0) {
        ret.data = [];
    } else {
        if(title){
            ret.data = await knex
                .select("article_tb.article_id","article_tb.title","article_tb.description","article_tb.c_time","article_tb.content",'user_tb.user_name','article_type_tb.type')
                .from('article_tb')
                .leftJoin("user_tb","article_tb.creator_id","user_id")
                .leftJoin("article_type_tb","article_type_tb.id","type_id")
                .where('title', title)
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('article_id', 'desc');
        }else if(type_id) {
            ret.data = await knex
                .select("article_tb.article_id","article_tb.title","article_tb.description","article_tb.c_time","article_tb.content",'user_tb.user_name','article_type_tb.type')
                .from('article_tb')
                .leftJoin("user_tb","article_tb.creator_id","user_id")
                .leftJoin("article_type_tb","article_type_tb.id","type_id")
                .where('type_id', type_id)
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('article_id', 'desc');
        }else {
            ret.data = await knex
                .select("article_tb.article_id","article_tb.title","article_tb.description","article_tb.c_time","article_tb.content",'user_tb.user_name','article_type_tb.type')
                .from('article_tb')
                .leftJoin("user_tb","article_tb.creator_id","user_id")
                .leftJoin("article_type_tb","article_type_tb.id","type_id")
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('article_id', 'desc');
        }
    }

    console.log(ret.data)
    return { errno: '', data: ret };
};