const express = require('express');
const expressstatic = require('express-static');
const http = require('http');
const urllib = require('url');
const util = require('util');
const querystrq = require('querystring');
const fs = require('fs');
const parseString = require('xml2js').parseString;


var users = {
    'blue': '1234',
    'yell': '222',
    'Jim':'4369'
};

var server = express();
server.get('/WebPage/index.html', function (req, res) {
    var params = urllib.parse(req.url, true);
    var file_name = 'F:/Jimtest/NodeApp/NodeApp';
    if (params.pathname == '/favicon.ico') {
        file_name = "";
        //res.end();
    } else {
        file_name = file_name + params.pathname;
    }
    if (file_name !== "") {
        fs.readFile(file_name, function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if (err) {
                res.write('404');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        //res.end();
    }
});
server.get('/Login', function (req, res) {
    console.log('Have Log in request!');
    var username = req.query['user'];
    var password = req.query['pass'];

    if (users[username] == null) {
        res.send({ 'ok': false, 'msg': 'LogIn failed' });
    } else {
        if (users[username] != password) {
            res.send({ 'ok': false, 'msg': 'password incorrect!' });
        } else {
            res.send({ 'ok': true, 'msg': 'LogIn success!' });
        }
    }
});
server.get('/WX', function (req, res) {
    console.log('Have Log in request!');
    var get = req.query;
    console.log(get);
    //res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.send(get.echostr);
    res.end;
});
/*
    XML from Wechat :
    <xml> <ToUserName>< ![CDATA[toUser] ]></ToUserName>
    <FromUserName>< ![CDATA[fromUser] ]></FromUserName>
    <CreateTime>12345678</CreateTime>
    <MsgType>< ![CDATA[text] ]></MsgType>
    <Content>< ![CDATA[你好] ]></Content> </xml>

*/
server.post('/WX', function (req, res) {
    console.log('received!');
    req.on('data', function (data) {
        var parms = querystrq.parse(data.toString());
        var jsonfromwx;
        //console.log(parms);
        parseString(parms, function (err, result) {
            if (err == null) {
                jasonfromwx = JSON.stringify(result);
                console.log(jasonfromwx.Content);
            }
        });
        //console.log(jsonfromwx);
    });
    
    //res.send(true);
    res.send(' ');

});
server.listen(80);