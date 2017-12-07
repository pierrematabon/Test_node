var express = require('express');
var app = express();
var latestCode = "";
var output = "";
var workspace = "";
var bodyParser = require("body-parser");
var fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.render('execution.ejs', {fs: fs});
 //   res.setHeader('Content-Type', 'text/plain');
//    res.end('Vous êtes à l\'accueil');
});

app.post('/', function(req, res){
    latestCode = req.body.writeFile;
    workspace = req.body.blockly;
    output = req.body.outputArea;
    res.render('execution.ejs', {latestCode:latestCode,fs:fs, workspace:workspace, output:output});
});
app.listen(8080);