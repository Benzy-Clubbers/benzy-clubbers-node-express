const express = require("express");

const router = express.Router();

const modelController = require("../controllers/car_trim.controller");

router.get("/models/:id/trims", modelController.listTrimsById);

module.exports = router;
