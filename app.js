const express = require("express");
const cors = require("cors");
const router = require("./router/router.js");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(3007, function () {
  console.log("server is running at 127.0.0.1:3007");
});
