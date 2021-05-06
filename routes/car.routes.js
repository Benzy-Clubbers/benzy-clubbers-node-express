const express = require("express");

const router = express.Router();

const modelController = require("../controllers/car_model.controller");
const trimController = require("../controllers/car_trim.controller");
const imageController = require("../controllers/car_image.controller");

router.get("/models", modelController.listAllModels);

router.get("/models/:id", modelController.findModelById);

router.get("/models/:id/trims", trimController.listTrimsById);

router.get("/models/:id/images", imageController.listImagesById);

module.exports = router;
