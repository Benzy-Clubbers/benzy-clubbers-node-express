const express = require("express");

const router = express.Router();

const modelController = require("../controllers/car_model.controller");
const trimController = require("../controllers/car_trim.controller");
const imageController = require("../controllers/car_image.controller");
const reviewController = require("../controllers/car_review.controller");

router.get("/models", modelController.listAllModels);
router.get("/model/:id", modelController.findModelById);
router.get("/trims/model/:id", trimController.listTrimsById);
router.get("/images/model/:id", imageController.listImagesById);
router.get("/reviews/model/:id", reviewController.findReviewsById);
router.post("/review/model/:id", reviewController.postReview);

module.exports = router;
