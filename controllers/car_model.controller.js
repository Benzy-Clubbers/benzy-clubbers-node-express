const db = require("../config/database");

// Show all car models
exports.listAllModels = async (_, res) => {
  const response = await db.query("SELECT * FROM car_schema.car_models");
  res.status(200).send(response.rows);
};

// Show models by id
exports.findModelById = async (req, res) => {
  const modelId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM car_schema.car_models WHERE id = $1",
    [modelId]
  );
  res.status(200).send(response.rows);
};
