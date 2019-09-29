const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./routes/api/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", users);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
