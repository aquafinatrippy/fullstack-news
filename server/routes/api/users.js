const Users = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
//get
router.get("/user/allUsers", async (req, res) => {
    try {
        const users = await Users.find({});
        res.send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.get("/user/:username", async (req, res) => {
    try {
        const user = await Users.find({ username: req.params.username });
        res.send(user);
    } catch (error) {
        res.status(400).send("couldnt find the user", error);
    }
});
router.get("/user/current", async (req, res) => {
    try {
        const user = await Users.findOne({ username: req.user._id });
        res.send(user);
    } catch (error) {
        res.status(400).send(`Failed gettinr current user: ${error}`);
    }
});
//register
router.post("/register", async (req, res) => {
    try {
        let user = await Users.findOne({ username: req.body.username });
        if (user) {
            return res.send("user with that username is registered");
        }
        let hash = await bcrypt.hash(req.body.password, 10);
        user = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hash
        });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

//login auth
router.post("/authenticate", async (req, res) => {
    try {
    } catch (error) {
        res.status(400).send(`Couldnt log in: ${error}`);
    }
});

module.exports = router;
