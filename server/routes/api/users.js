const router = require("express").Router();
const User = require("../../models/User");

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

router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).send({ error: "login failed, check auth" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    //res.status(400).send(`Login error: ${error}`);
  }
});

module.exports = router;
