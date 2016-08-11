var express = require('express');
var router = express.Router();

var peeps = [];

function Peep(name, bio, url) {
    this.name = name,
        this.bio = bio,
        this.url = url
};

var kim = new Peep('Kim', 'Kim is gone at Summer Set', '../server/assets/images/Kim.jpg');
var keri = new Peep('Keri', 'Keri has minions! (children)', '../server/assets/images/Keri.jpg');
var joe = new Peep('Joe', 'Joe likes coffee', '../server/assets/images/Joe.jpg');
var harry = new Peep('Harry', "Harry won't shut up about Fuzzers", '../server/public/assets/images/Harry.jpg');
var ray = new Peep('Ray', 'Ray has colorful hair', '../server/public/assets/images/Ray.jpg');

peeps.push(kim, keri, joe, harry, ray);
console.log(peeps);

// router.get('/', function(req, res) { //since /cats was already matched in AJAX, we need to drop the part it's already matched
//     res.send(cats);
// });
//
// router.post('/', function(req, res) { // see above comment
//     console.log('request: ', req.body);
//     cats.push(req.body);
//     res.sendStatus(201);
// });


module.exports = router;
