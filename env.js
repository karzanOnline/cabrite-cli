/**
 * Created by caozheng on 2016/12/23.
 */

function mainEnv(param) {
    var fs = require('fs');
    var path = require('path');
    var project = require('./package.json');
    var files = path.join(__dirname, 'website/domain.js');
    fs.readFile(files,{encoding:'utf-8'}, function (err,bytesRead) {
        var env = param;
        var re = /(var _domain=')(.){0,}[']/g;
        if (err) throw err;
        if(env == "dev"){
            bytesRead = bytesRead.replace(re,"var _domain='"+project.domain.dev+"'");
        }else if(env=="test"){
            bytesRead = bytesRead.replace(re,"var _domain='"+project.domain.test+"'");
        }else if (env=="product"){
            bytesRead = bytesRead.replace(re,"var _domain='"+project.domain.product+"'");
        }else{
            throw ('env is undefined')
        }
        fs.writeFile(files, bytesRead, function(err){
            if(err)
                console.log("fail " + err);
            else
                console.log("写入文件ok");
        });
        console.log("readFile success");
    });
}
module.exports = mainEnv;
