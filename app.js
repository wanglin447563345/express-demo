const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse various different custom JSON types as JSON
app.use(bodyParser.json({type:"application/json",uploadDir:'./uploads'}));

const userAuth = require('./Src/Util/user_auth').auth;
app.use((req, res, next) => { //这个要放在验证身份前，不然会出现要验证身份的接口会跨域，不要验证身份的接口不跨域
    res.set('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type, X-Beancomm-Token, X-Beancomm-UserId');
    res.set('Access-Control-Request-Method', 'GET,POST,PUT,DELETE');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.set('Access-Control-Expose-Headers', 'X-Beancomm-Token');
    next();
});
app.use(/^\/api\/(?!login)(?!list_article)(?!create_user).*/, userAuth);   //不要验证身份的接口
const routes = require('./Src/Routes');
routes(app);

app.listen(3001, ()=>{
   console.log("listen localhost:3001")
});
