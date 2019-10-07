const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./routes/api/users");
const news = require("./routes/api/news");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");

//middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api", users);
app.use("/api", news);
//jwt secure
app.use(jwt());

//error handle
app.use(errorHandler);
//run server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
