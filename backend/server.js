const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const login = require("./api/logincheck");
const signup = require("./api/signup");
app.use("/logincheck", login);
app.use("/signup", signup);

app.listen(port);
console.log("Listening on port " + port);