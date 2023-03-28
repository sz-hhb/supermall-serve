const express = require("express");
const homeHandler = require("../../router-handler/home/home-data.js");

const router = express.Router();

router.get("/multidata", homeHandler.getMultiData);

router.get("/data", homeHandler.getHomeData);

module.exports = router;
