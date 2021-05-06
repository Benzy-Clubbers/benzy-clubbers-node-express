const db = require("../config/database");

exports.findReviewsById = async (req, res) => {
  const modelId = parseInt(req.params.id);

  const response = await db.query(
    "SELECT * FROM car_schema.car_reviews WHERE model_id = $1",
    [modelId]
  );

  res.status(200).send(response.rows);
};

exports.postReview = async (req, res) => {
  const modelId = parseInt(req.params.id);

  await db.query(
    "INSERT INTO car_schema.car_reviews (Model_id, Review, Title, Rating)" +
    "VALUES ($1, $2, $3, $4)", [modelId, req.body.review, req.body.title, req.body.rating],
    ).catch(err => {
            res.status(500);
            res.send('Error: ' + err.message);
        });

  // update average rating for Model in car_models table
  await db.query(
    "UPDATE car_schema.car_models SET rating = (SELECT ROUND(avg(rating)::numeric,1) " +
    "FROM car_schema.car_reviews WHERE model_id = $1) WHERE id = $1",
    [modelId],
    ).catch(err => {
            res.status(500);
            res.send('Error: ' + err.message);
        });

  console.log("Row Inserted. Status 200");
  res.status(200).send("Row Inserted. Status 200");
};