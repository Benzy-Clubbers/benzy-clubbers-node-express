const express = require("express");

const router = express.Router();

const modelController = require("../controllers/car_model.controller");
const trimController = require("../controllers/car_trim.controller");
const imageController = require("../controllers/car_image.controller");
const reviewController = require("../controllers/car_review.controller");

router.get("/models", modelController.listAllModels);

router.get("/model/:id", modelController.findModelById);

router.get("/model/:id/trims", trimController.listTrimsById);

router.get("/model/:id/images", imageController.listImagesById);

router.get("/model/:id/reviews", reviewController.findReviewsById);

router.post("/model/:id", reviewController.postReview);

module.exports = router;
