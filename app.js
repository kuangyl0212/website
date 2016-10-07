// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var User = require('./models/user');

var app = express();

var mongoose=require('mongoose');

mongoose.connect('mongodb://119.29.230.182/test?poolSize=40');
// var session = require('express-session');
// var Settings = require('./server/action/data/setting');
// var MongoStore = require('connect-mongodb');


// app.use(session({
//     secret: Settings.COOKIE_SECRET,
//     key: Settings.DB,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
//     store: new MongoStore({
//         host: Settings.HOST,
//         port: Settings.PORT,
//         username: Settings.USERNAME,
//         password: Settings.PASSWORD,
//         db: Settings.DB}),
//     resave: false,
//     saveUninitialized: true
// }));


// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/data/:module', function (req, res, next) {
    var c_path = req.params.module;
    var Action = require('./server/action/data/' + c_path);
    Action.execute(req, res);
});

app.post('/reg',function (req,res) {
    console.log('post /reg',req.body);
    var query = req.body;
    var _user={
        username: 'test1',
        password: 'test1',
    };
    var user=new User(_user);
    user.save(function(err,user){
        if (err) {
            console.log(err);
            res.send('error===>',err);
        }
        console.log('注册成功');
        res.send('注册成功');
    }).catch(function (err) {
        console.log('error',err);
    })
});

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 