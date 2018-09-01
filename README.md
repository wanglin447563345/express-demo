# 安装

npm i


# 启动

node app.js

# 使用pm2启动

npm i pm2 -g  <br>
pm2 start pm2.json

# 项目目录结构

express-demo<br>
--Src<br>
----Config<br>
------db.js       数据库配置<br>
------message.js    错误信息<br>
--Routes<br>
----Login<br>
------controller,js  处理与前端交互的逻辑<br>
------index.js   路由<br>
------logic.js   对前端传来的数据做数据验证配置<br>
------model.js   处理与数据库交互<br>
--Util
----global.js   公用的全局方法<br>
----knex.js     数据库链接<br>
----user_auth.js   用户权限<br>
--app.js   入口文件