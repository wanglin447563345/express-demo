
const g = require('../../Util/global');
const model = require('./model');

exports.login = async (req, res) => {
    try {
        const b = req.body;
        console.log(b);
        const r = await model.login(b.user_name, b.password);
        if (r.errno) {
            return g.fail(req, res, r.errno);
        }
        return g.success(req, res, r.data);
    } catch (err) {
        return g.fail(req, res,'HTTP_SERVER_ERROR', err.stack);
    }
};