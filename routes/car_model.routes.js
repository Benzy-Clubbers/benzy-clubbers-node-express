const express = require("express");

const router = express.Router();

const modelController = require("../controllers/car_model.controller");

router.get("/models", modelController.listAllModels);

router.get("/models/:id", modelController.findModelById);

module.exports = router;
