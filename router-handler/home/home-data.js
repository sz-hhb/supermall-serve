const db = require("../../database");

const getMultiData = (req, res) => {
  const sqlStr = "select * from home_multidata";

  db.query(sqlStr, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result[0].data);
    }
  });
};

const getHomeData = (req, res) => {
  const type = req.query.type;
  const page = req.query.page;

  const sqlStr = "select * from home_data where type = ? and page = ?";

  db.query(sqlStr, [type, page], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result[0].data);
    }
  });
};

module.exports = {
  getMultiData,
  getHomeData,
};
