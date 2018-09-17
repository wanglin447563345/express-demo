const knex = require('../../../Util/knex');
const g = require('../../../Util/global');

exports.model = async (b) =>{
   const d = await knex('click_count_tb').where({link_id:b.link_id}).increment('count', 1);
    if(d){
       return {errno:''}
    }
    return {errno:"UNKNOW"}
}