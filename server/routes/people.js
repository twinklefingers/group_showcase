var express = require('express');
var router = express.Router();

var peeps = [];

function Peep(name, bio, url) {
    this.name = name,
        this.bio = bio,
        this.url = url,
        this.likes = 0
};

var kim = new Peep('Kim', 'Kim is gone at Summer Set.', '../assets/images/Kim.jpg');
var keri = new Peep('Keri', 'Keri has minions!', '../assets/images/Keri.jpg');
var joe = new Peep('Joe', 'Give Joe coffee!', '../assets/images/Joe.jpg');
var harry = new Peep('Harry', "Harry won't shut up.", '../assets/images/Harry.jpg');
var ray = new Peep('Ray', 'Ray has colorful hair.', '../assets/images/Ray.jpg');

peeps.push(kim, keri, joe, harry, ray);

router.get('/', function(req, res) {
    res.send(peeps);
});

router.post("/:name", function(req, res) {
    var name = req.params.name;
    peeps.forEach(function(people, i) {
        if (name == people.name) {
            peeps[i].likes++;
            res.sendStatus(201);
            return;
        }
    })
});

/* Here you go kris. */

// router.post('/kim', function(req, res) {
//     peeps[0].likes++;
//     console.log("kim: ", peeps[0].likes);
//     res.sendStatus(201);
// });
// router.post('/keri', function(req, res) {
//     peeps[1].likes++;
//     console.log("keri: ", peeps[1].likes);
//     res.sendStatus(201);
// });
// router.post('/joe', function(req, res) {
//     peeps[2].likes++;
//     console.log("joe: ", peeps[2].likes);
//     res.sendStatus(201);
// });
// router.post('/harry', function(req, res) {
//     peeps[3].likes++;
//     console.log("harry: ", peeps[3].likes);
//     res.sendStatus(201);
// });
// router.post('/ray', function(req, res) {
//     peeps[4].likes++;
//     console.log("ray: ", peeps[4].likes);
//     res.sendStatus(201);
// });

module.exports = router;
