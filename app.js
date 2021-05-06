require("dotenv").config();

const express = require("express");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

const index = require("./routes/ping.routes");
const carRoute = require("./routes/car.routes");

// Express Setup
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Cors Setup
app.use(
  cors({
    origin: process.env.CORS_IP,
  })
);

// Routes
app.use(index);
app.use("/cars/", carRoute);

app.listen(port, () => {
  console.log(`Benzy Clubbers listening at port : ${port}`);
});
