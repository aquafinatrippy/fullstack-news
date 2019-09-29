const mongoose = require("mongoose");

const dbpath =
    "mongodb+srv://aqua:aqua1234@aquacluster-vkc9a.mongodb.net/posts";

mongoose
    .connect(dbpath, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(res => {
        console.log("connected to db");
    })
    .catch(err => {
        console.log(err);
    });

module.exports = mongoose;
