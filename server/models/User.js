const mongoose = require("../database");
const validator = require("validator");

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

// userScheme.methods.generateAuthToken = function() {
//     const token = jwt.sign(
//         { _id: this._id, isAdmin: this.isAdmin },
//         config.get("myprivatekey")
//     ); //get the private key from the config file -> environment variable
//     return token;
// };

const User = mongoose.model("User", userScheme);

module.exports = User;
