const db = require("../config/database");

// export this listImagesById
exports.listImagesById = async (req, res) => {
  //id from body
  const modelId = parseInt(req.params.id);

  // SQL query with model id
  const response = await db.query(
    "SELECT * FROM car_schema.car_images WHERE model_id = $1",
    [modelId]
  );

  //returns http 200 with SQL response
  res.status(200).send(response.rows);
};
