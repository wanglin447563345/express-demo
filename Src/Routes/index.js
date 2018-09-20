const pkg = require('../../package');
const { notFound } = require('../Util/global');
const login = require('./User/Login');
const create_user = require('./User/CreateUser');
const delete_user = require('./User/DeleteUser');
const edit_user = require('./User/EditUser');
const list_user = require('./User/ListUser');
const list_article = require('./Article/ListArticle');
const create_article = require('./Article/CreateArticle');
const delete_article = require('./Article/DeleteArticle');
const edit_article = require('./Article/EditArticle');
const detail_article = require("./Article/DetailArticle");
const type_sum = require('./Dashboard/TypeSum');
const click_sum = require("./Dashboard/ClickSum");
const count_add = require("./Dashboard/CountAdd");
const list_discuss = require("./Discuss/DiscussList");
const create_type = require("./Article/AddArticleType");
const delete_type = require("./Article/DeleteArticleType");
const edit_type = require("./Article/EditArticleType");
const upload = require('./Common/Upload');


module.exports = (app) => {
    app.all('/', (req, res) => {
        res.send(`${pkg.name}`);
    });

    app.use('/api', [login,]);
    app.use('/api', create_user);
    app.use('/api', delete_user);
    app.use('/api', edit_user);
    app.use('/api', list_user);
    app.use('/api', list_article);
    app.use('/api', create_article);
    app.use('/api', detail_article);
    app.use('/api', delete_article);
    app.use('/api', edit_article);
    app.use('/api', type_sum);
    app.use('/api', click_sum);
    app.use('/api', count_add);
    app.use('/api', list_discuss);
    app.use('/api', create_type);
    app.use('/api', delete_type);
    app.use('/api', edit_type);
    app.use('/api', upload);

    app.use(notFound);
};