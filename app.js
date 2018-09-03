const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse various different custom JSON types as JSON
app.use(bodyParser.json({type:"application/json"}));

const userAuth = require('./Src/Util/user_auth').auth;
app.use(/^\/api\/(?!login).*/, userAuth);   //不是/api/login路劲时需要验证用户身份
const routes = require('./Src/Routes');
routes(app);

app.listen(3000, ()=>{
   console.log("listen localhost:3000")
});
