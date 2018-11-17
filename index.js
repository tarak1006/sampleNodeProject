var express = require('express');
var app = express();

const port=process.env.PORT || 3000;

// var routesTickets = require('./rest/tickets.rest.js');
var routesUsers = require('./rest/users.rest.js');

// app.use('/tickets', routesTickets);
app.use('/users', routesUsers);

//db connection
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/sampledb',{useNewUrlParser:true});

var server = app.listen(port, function () {
    // var port = server.address().port;

    console.log("Example app listening at port %s", port);
});
