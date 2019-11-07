const mongoose = require("mongoose");
require("dotenv").config();

const dbpath = process.env.DB_STRING;

mongoose.Promise = global.Promise;

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
