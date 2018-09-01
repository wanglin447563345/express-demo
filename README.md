# 安装

npm i


# 启动

node app.js

# 使用pm2启动

npm i pm2 -g
pm2 start pm2.json

# 项目目录结构

express-demo
--Src
----Config
------db.js       数据库配置
------message.js    错误信息
--Routes
----Login
------controller,js  处理与前端交互的逻辑
------index.js   路由
------logic.js   对前端传来的数据做数据验证配置
------model.js   处理与数据库交互
--Util
----global.js   公用的全局方法
----knex.js     数据库链接
----user_auth.js   用户权限
--app.js   入口文件