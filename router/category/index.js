const express = require("express");
const categoryHandler = require("../../router-handler/category/category-data.js");

const router = express.Router();

router.get("/", categoryHandler.getCategoryData);

module.exports = router;
