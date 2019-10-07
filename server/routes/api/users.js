const Users = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../_helpers/config.json");

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
    const user = await Users.findOne({ username: req.user.username });
    res.send(user);
  } catch (error) {
    res.status(400).send(`Failed gettinr current user: ${error}`);
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

//login auth
router.post("/authenticate", async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ sub: user.id }, config.secret);
      res.send("logged in");
    } else {
      res.send("Wrong password");
    }
  } catch (error) {
    res.status(400).send(`Couldnt log in: ${error}`);
  }
});

module.exports = router;
