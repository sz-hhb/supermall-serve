const db = require("../../database");

// 二级菜单分类接口
const getSubcategoryData = (req, res) => {
  const maitKey = req.query.maitKey;

  const sqlStr = "select * from subcategory where maitKey = ?";

  db.query(sqlStr, maitKey, (err, result) => {
    if (err) throw err;
    else {
      res.send(result[0].data);
    }
  });
};

// 二级菜单下商品列表接口
const getSubcategoryDetailData = (req, res) => {
  const miniWallkey = req.query.miniWallkey;
  const type = req.query.type;

  const sqlStr =
    "select * from subcategory_detail where miniWallkey = ? and type = ?";

  db.query(sqlStr, [miniWallkey, type], (err, result) => {
    if (err) throw err;
    else {
      res.send(result[0].data);
    }
  });
};

module.exports = {
  getSubcategoryData,
  getSubcategoryDetailData,
};
