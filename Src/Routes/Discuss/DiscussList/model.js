const knex = require("../../../Util/knex");
const g = require("../../../Util/global");

exports.model = async (b) =>{
    let count;
    if(b.article_id){
        count = await knex('discuss_tb').where({belong_article_id:b.article_id}).count('discuss_id as c').first()
    }else {
        count = await knex('discuss_tb').count('discuss_id as c').first()
    }
    const ret = g.pagination(count.c, b.page, b.rows);
    if(ret.c===0){
        ret.data=[]
    }else {
        if(b.article_id){
            ret.data = await knex('discuss_tb')
                .select("discuss_id","use_count","unuse_count","discuss_tb.c_time","discuss_content","title")
                .leftJoin('article_tb','belong_article_id','article_id')
                .where({belong_article_id:b.article_id})
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('use_count', 'desc');
        }else {
            ret.data = await knex('discuss_tb')
                .select("discuss_id","use_count","unuse_count","discuss_tb.c_time","discuss_content","title")
                .leftJoin('article_tb','belong_article_id','article_id')
                .limit(ret.numberPerPage)
                .offset(ret.from)
                .orderBy('use_count', 'desc');
        }
    }
    return { errno: '', data: ret };
}