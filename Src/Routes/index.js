const pkg = require('../../package');
const { notFound } = require('../Util/global');
const login = require('./Login');
const create_user = require('./User/CreateUser');
const delete_user = require('./User/DeleteUser');
const edit_user = require('./User/EditUser');
const list_user = require('./User/ListUser');
const list_article = require('./Article/ListArticle');


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

    app.use('/api', [login,]);
    app.use('/api', create_user);
    app.use('/api', delete_user);
    app.use('/api', edit_user);
    app.use('/api', list_user);
    app.use('/api', list_article);

    app.use(notFound);
};