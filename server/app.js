var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var peeps = require('./routes/people.js'); //.js is assumed

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/people', peeps);

// app.get('/routes/people.js', function(req, res) {
//     res.send(peeps);
// });
//
// app.post('/cats', function(req, res) {
//     console.log("request: ", req); //crazy!
//     cats.push(req.body);
//     res.sendStatus(201);
// });


//any request to a url
app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file)); //concatonates strings, cross-browser performance
});

//set our port
app.set('port', process.env.PORT || 3000);

//listen
app.listen(app.get('port'), function() {
    console.log("The server is running on port ", app.get('port')); //this is nice to have
});
