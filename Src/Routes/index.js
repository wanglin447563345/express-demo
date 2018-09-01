const pkg = require('../../package');
const { notFound } = require('../Util/global');
const login = require('./login');


module.exports = (app) => {
    app.all('/', (req, res) => {
        res.send(`${pkg.name}`);
    });

    app.use((req, res, next) => {
        res.set('Access-Control-Allow-Origin', req.get('origin') || '*');
        res.set('Access-Control-Allow-Headers', 'X-Beancomm-Token');
        res.set('Access-Control-Request-Method', 'GET,POST,PUT,DELETE');
        res.set('Access-Control-Allow-Credentials', 'true');
        res.set('Access-Control-Allow-Origin', req.get('origin') || '*');
        res.set('Access-Control-Expose-Headers', 'X-Beancomm-Token');
        next();
    });

    app.use('/api', login);

    app.use(notFound);
};