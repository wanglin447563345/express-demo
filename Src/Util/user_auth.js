const g = require('./global');
const knex = require('./knex');


const get = async (userId) => {
    const u = await knex('user_tb').select('user_id', 'token', 'user_name').where('user_id', userId).first();
    if (!u) {
        return { errno: 'ERR_USER_NOT_EXISTS' };
    }
    return { errno: '', data: u };
};

exports.auth = async (req, res, next) => {
    req.queryTime = Math.round(new Date().getTime() / 1000);
    const uid = req.get('X-Beancomm-UserId');
    const tk = req.get('X-Beancomm-Token');
    if (typeof uid === 'undefined' || typeof tk === 'undefined') {
        return g.fail(req, res, 'ERR_USER_AUTH_INS_HEADERS');
    }
    try {
        const r = await get(uid);

        if (r.errno) {
            return g.fail(req, res, r.errno);
        }
        if (r.data.token === tk) {
            req.userInfo = r.data;
        } else {
            return g.fail(req, res, 'ERR_USER_AUTH_TOKEN');
        }
    } catch (err) {
        return g.fail(req, res, 'HTTP_SERVER_ERROR', err.stack);
    }
    return next();
};