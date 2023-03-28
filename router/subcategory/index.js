const express = require("express");
const subcategoryHandler = require("../../router-handler/subcategory/subcategory-data");

const router = express.Router();

router.get("/", subcategoryHandler.getSubcategoryData);
router.get("/detail", subcategoryHandler.getSubcategoryDetailData);

module.exports = router;
