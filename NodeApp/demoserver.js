var http = require('http');
var urllib = require('url');
var util = require('util');
var querystr = require('querystring');
var fs = require("fs");

var users = {};

var server = http.createServer(function (req , res){
    var str = "";
    // DEBUG: 
    req.on('data',function(data){
      str += data;
    });
    req.on('end' , function(` `1                                            ){


    });

});

server.listen(80);
