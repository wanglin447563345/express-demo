const g = require('../../../Util/global');
const knex = require('../../../Util/knex');

exports.model = async (b) => {
    const types = await knex('article_type_tb').select("*");
    const series_data = [];
    const legend_data = [];
    for(let i in types){
        const name = types[i].type;
        const a = await knex("article_tb").where({'type_id':types[i].id}).count("article_id as c").first()
        const item={value:a.c||0, name};
        series_data.push(item);
        legend_data.push(name)
    }
    const data={series_data,legend_data};
    return { errno: '', data };
}