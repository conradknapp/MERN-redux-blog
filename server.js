const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("./config/keys");

const postRoutes = require("./api/routes/posts");

mongoose.connect(keys.MONGO_URI, { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/posts", postRoutes);

const port = process.env.API_PORT || 3030;

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
