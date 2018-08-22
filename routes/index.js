module.exports = function (app) {
    app.all('/', function(req, res){
      res.send("index")
    });

    app.use('/aa', require('./aa.js'));
    app.use('/users', require('./users.js'));
};