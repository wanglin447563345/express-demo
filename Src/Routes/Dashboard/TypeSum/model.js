const knex = require('../../../Util/knex');

exports.model = async (b) => {
    const types = await knex('article_type_tb').select("*").orderBy('id', 'desc');
    const series_data = [];
    const legend_data = [];
    const list_data=[];
    for(let i in types){
        const name = types[i].type;
        const a = await knex("article_tb").where({'type_id':types[i].id}).count("article_id as c").first();
        const item={value:a.c||0, name};
        const list_item={id:types[i].id,type:name,count:a||0};
        series_data.push(item);
        legend_data.push(name);
        list_data.push((list_item))
    }
    const data={series_data,legend_data,list_data};
    return { errno: '', data };
}