'use strict';

var express = require('express'),
    app     = express(),
    path    = require('path'),
    server  = require('http').createServer(app);


app.configure(function () {
    app.set('views', path.join(__dirname, 'app/views'));
    app.set('view engine', 'jade');

    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

//enviroments
app.configure('production', function () {
    app.locals.env = 'production';
});


app.get('/', function (req, res) {
    res.render('app.jade');
});

server.listen(8000, function () {
    console.log('Debug de prueba!!!');
});