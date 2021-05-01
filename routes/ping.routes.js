const express = require("express");

const router = express.Router();

router.get("/ping", (_, res) => {
  res.status(200).send("pong");
});

module.exports = router;
