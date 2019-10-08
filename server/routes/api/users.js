const Users = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../../controllers/authMiddleware");
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
router.get("/user/current", authenticate, async (req, res) => {
  try {
    res.status(200).send(req.user);
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
    const token = await user.newAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.send(`error creating user ${error}`);
  }
});

//login auth
router.post("/login", async (req, res) => {
  try {
    const user = await Users.checkValidCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.newAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(`Couldnt log in: ${error}`);
  }
});
//logout
router.post('/users/logout', authenticate, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
         return token.token !== req.token 
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})


router.post('/users/logoutall', authenticate, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})



module.exports = router;
