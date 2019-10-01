const Users = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//get
router.get("/user/:username", (req, res) => {
    Users.find({ username: req.params.username })
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.send(err);
        });
});
//register
router.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        let newUser = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hash
        });
        newUser
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });
});

module.exports = router;
