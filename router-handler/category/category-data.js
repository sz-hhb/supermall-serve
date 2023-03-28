const db = require("../../database");

// 一级菜单分类接口
const getCategoryData = (req, res) => {
  const sqlStr = "select * from category";

  db.query(sqlStr, (err, result) => {
    if (err) throw err;
    else {
      res.send(result[0].data);
    }
  });
};

module.exports = {
  getCategoryData,
};
