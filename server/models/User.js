const mongoose = require("../database");

let userScheme = mongoose.Schema({
    firstName: {
        type: String,
        required: true
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
        required: true
    },
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
