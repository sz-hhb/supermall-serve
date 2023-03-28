const db = require("../../database");

const getDetailData = (req, res) => {
  const iid = req.query.iid;

  const strSql = "select * from detail where iid = ?";

  db.query(strSql, iid, (err, result) => {
    if (err) throw err;
    else {
      res.send(result[0].data);
    }
  });
};

const getDetailRecommendData = (req, res) => {
  const strSql = "select * from recommend";

  db.query(strSql, (err, result) => {
    if (err) throw err;
    else {
      res.send(result[0].data);
    }
  });
};

module.exports = {
  getDetailData,
  getDetailRecommendData,
};
