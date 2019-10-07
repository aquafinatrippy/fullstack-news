const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./routes/api/users");
const news = require("./routes/api/news");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);
//routes
app.use("/api", users);
app.use("/api", news);

//run server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
