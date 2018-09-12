const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse various different custom JSON types as JSON
app.use(bodyParser.json({type:"application/json",uploadDir:'./uploads'}));

const userAuth = require('./Src/Util/user_auth').auth;
app.use(/^\/api\/(?!login)(?!list_article).*/, userAuth);   //不要验证身份的接口
const routes = require('./Src/Routes');
routes(app);

app.listen(3000, ()=>{
   console.log("listen localhost:3000")
});
