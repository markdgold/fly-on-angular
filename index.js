var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airplanes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/airplanes', require('./controllers/airplane'));

/*Airplane.create({
        manufacturer: "BAC",
        model: "Concord",
        engines: 4,
        image: 'https://en.wikipedia.org/wiki/Concorde#/media/File:British_Airways_Concorde_G-BOAC_03.jpg'
    },
    function(err, airplane) {
        if (err) return console.log('error ', err);
        console.log(airplane);
    }
);
*/

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
