const db = require("../config/database");

exports.listTrimsById = async (req, res) => {
  const modelId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM car_schema.car_trims WHERE model_id = $1",
    [modelId]
  );
  res.status(200).send(response.rows);
};
