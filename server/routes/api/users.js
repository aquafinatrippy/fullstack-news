const Users = require("../../models/User");
const router = require("express").Router();

//get
router.get("/", (req, res) => {
    Users.find({})
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.send(err);
        });
});
//add
router.post("/", (req, res) => {
    let newUser = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username
    });
    newUser
        .save()
        .then(added => {
            res.send(added);
        })
        .catch(err => {
            res.send(err);
        });
});

//delete

module.exports = router;
