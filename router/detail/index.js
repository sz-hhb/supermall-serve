const express = require("express");
const detailHandler = require("../../router-handler/detail/detail-data.js");

const router = express.Router();

router.get("/", detailHandler.getDetailData);
router.get("/recommend", detailHandler.getDetailRecommendData);

module.exports = router;
