var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var reload = require('reload');
var http = require('http');
var compress = require('compression');
var server = http.createServer(app);

var port = process.env.PORT || 3000;

app.use(compress());
// 设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。
// app.set('views', path.join(__dirname, 'views'));
// /* 设置视图模板引擎为 ejs*/
// app.set('view engine', 'ejs');
/* 添加flash功能*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/dist/js/domain.js', function (req, res) {
    var options = {
        root : __dirname + '/dist/js'
    };
    res.sendFile('domain.js', options, (err) => {
        "use strict";
        if(err){
            console.log(err)
        } else {
            console.log('domain success')
        }
    })

});

app.get('/build/bundle.dll.css', function (req, res) {
    var options = {
        root : __dirname + '/build'
    };
    res.sendFile('bundle.dll.css', options, (err) => {
        "use strict";
        if(err){
            console.log(err)
        } else {
            console.log('bundle success')
        }
    })

});

app.get('/build/bundle.js', function (req, res) {
    var options = {
        root : __dirname + '/build'
    };
    res.sendFile('bundle.js', options, (err) => {
        "use strict";
        if(err){
            console.log(err)
        } else {
            console.log('bundle success')
        }
    })
});

app.get('/dist/common.js', function (req, res) {
    var options = {
        root : __dirname + '/dist'
    };
    res.sendFile('common.js', options, (err) => {
        "use strict";
        if(err){
            console.log(err)
        } else {
            console.log('bundle success')
        }
    })
});

app.get('/dist/js/index.js', function (req, res) {
    var options = {
        root : __dirname + '/dist/js'
    };
    res.sendFile('index.js', options, (err) => {
        "use strict";
        if(err){
            console.log(err)
        } else {
            console.log('bundle success')
        }
    })
});



app.get('*', (request, response)=>{

    var options = {
        root: __dirname
    }
    response.sendFile('demo.html', options, (err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('成功！')
        }
    })
});




reload(server, app);

server.listen(port, () =>  {
    console.log('App (dev) is now running on port 3000!');
});


module.exports = app;