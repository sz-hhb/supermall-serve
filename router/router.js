const express = require("express");
const homeRouter = require("./home");
const detailRouter = require("./detail");
const categoryRouter = require("./category");
const subcategoryRouter = require("./subcategory");

const router = express.Router();

router.use("/home", homeRouter);
router.use("/detail", detailRouter);
router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);

module.exports = router;
