const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./routes/api/users");
const news = require("./routes/api/news");
const comments = require("./routes/api/comments");

//middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api", users);
app.use("/api", news);
app.use("/api", comments);

//run server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
