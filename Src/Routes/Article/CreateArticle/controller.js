const g = require("../../../Util/global");
const m = require("./model");

exports.controller = async (req, res) =>{
    try{
        const b =req.body;
        const r = m.model(b);
        if(r.errno){
            return g.fail(req, res, r.errno)
        }
        return g.success(req, res);
    } catch(err) {
        return g.fail(req, res,'HTTP_SERVER_ERROR', err.stack);
    }
};