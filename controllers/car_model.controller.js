const db = require("../config/database");

exports.listAllModels = async (_, res) => {
  const response = await db.query("SELECT * FROM car_schema.car_models");
  res.status(200).send(response.rows);
};

exports.findModelById = async (req, res) => {
  const modelId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM car_schema.car_models WHERE id = $1",
    [modelId]
  );
  res.status(200).send(response.rows);
};
