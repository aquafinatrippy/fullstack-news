const router = require("express").Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");
//all users
router.get("/allUsers", async (req, res) => {
    const users = await User.find({});
    res.send(users);
});
//register
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(`Error creating user: ${error}`);
    }
});
//login
router.post("/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({ error: "login failed, check auth" });
        }
        const token = await user.generateAuthToken();
        res.header("Authorization", token).send({ user, token });
    } catch (error) {
        res.status(400).send(`Login error: ${error}`);
    }
});
//get current acc
router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        res.send(user);
    } catch (error) {
        res.status(400).send(`Couldnt get current user: ${error}`);
    }
});

//logout
router.post("/users/me/logout", auth, async (req, res) => {
    try {
        res.send({ message: "succesfuly logged out" });
    } catch (error) {
        res.status(500).send(`error with logout: ${error}`);
    }
});
router.post("/users/me/logoutall", auth, async (req, res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length);
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(`error with logout: ${error}`);
    }
});

module.exports = router;
