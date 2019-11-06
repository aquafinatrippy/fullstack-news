const mongoose = require("mongoose");

const dbpath =
  "mongodb+srv://tanel:tanel1234@aquacluster-vkc9a.mongodb.net/fullstackNews";

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
