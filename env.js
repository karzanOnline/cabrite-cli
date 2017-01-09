/**
 * Created by caozheng on 2016/12/23.
 */

let fs = require('fs');
let path = require('path');
let files = path.join(__dirname, 'website/domain.js');
let project = require('./package.json');
let globalArg = process.argv.splice(2);

function replaceDomain(param, bytesRead) {

    let re = /(var _domain=')(.){0,}[']/g;
    let result;
    switch (param){
        case "dev": result = project.domain.dev;break;
        case "test": result = project.domain.test;break;
        case "product": result = project.domain.product;break;
        default: throw ('env is undefined')
    }
    return bytesRead.replace(re, `var _domain='${result}'`)
}

function readPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(files,{encoding:'utf-8'}, function (err, bytesRead) {
            if(err)
                reject(err);
            else
                resolve(bytesRead)
        })
    });
}

function writePromise(bytesRead) {
    return new Promise((resolve, reject) => {
        fs.writeFile(files, bytesRead, function(err){
            if(err)
                reject(err);
            else {
                resolve();
                console.log("写入文件ok");
            }
        });
    });
}

async function mainEnv() {
    let param = globalArg[0] || 'dev';
    let readFile = await readPromise();
    let bytesRead = replaceDomain(param, readFile);
    await writePromise(bytesRead);
}
module.exports = mainEnv();
