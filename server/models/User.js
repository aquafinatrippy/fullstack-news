const mongoose = require("../database");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let userScheme = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    validate(value) {
      if (validator.isEmpty(value)) {
        throw new Error("Please enter password");
      } else if (validator.equals(value.toLowerCase(), "password")) {
        throw new Error("Password is invalid");
      } else if (validator.contains(value.toLowerCase(), "password")) {
        throw new Error("password should not contain password");
      }
    }
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

userScheme.methods.newAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "thisismynewblog", {
    expiresIn: "7 days"
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userScheme.statics.checkValidCredentials = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Unable to login 2");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login 2");
  }

  return user;
};

const User = mongoose.model("User", userScheme);

module.exports = User;
