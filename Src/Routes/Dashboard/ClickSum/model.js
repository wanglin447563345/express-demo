const knex = require('../../../Util/knex');

exports.model = async (b) => {
    const datas = await knex.select("*").from('click_count_tb');
    if(datas){
        const legend_data = [];
        const series_data = [];
        for (let i in datas){
            legend_data.push(datas[i].link_name);
            series_data.push(datas[i].count)
        }
        const data={series_data,legend_data};
        return { errno: '', data };
    }
    return { errno: 'UNKNOWN_ERROR'};
};