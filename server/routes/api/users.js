const Users = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//get
router.get('/user/allUsers', async (req, res) => {
    try {
        const users = await Users.find({})
        res.send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get("/user/:username", async (req, res) => {
    try {
        const user = await Users.find({ username: req.params.username})
        res.send(user)
    } catch (error) {
        res.status(400).send('couldnt find the user', error)   
    }
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
