var http = require('http');
var urllib = require('url');
var util = require('util');
var querystr = require('querystring');
var fs = require("fs");

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });

//    // ���� url ����

//    var params = url.parse(req.url, true);
//    res.write(params.pathname);
//    //res.write("\n");
//    //res.write("URL��" + params.url);
//    console.log(params);
//    res.end();
//}).listen(80);

http.createServer(function (req, res) {
    var params = urllib.parse(req.url, true);
    var file_name = 'F:/Jimtest/NodeApp/NodeApp' ;
    if (params.pathname == '/favicon.ico') {
        file_name = "";
    //res.end();
    }else{
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

    //;


}).listen(80)
