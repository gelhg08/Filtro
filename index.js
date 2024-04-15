const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const routes = require("./routes");

require("dotenv").config();
console.log("MONGODB_CONNECTION_URL:", process.env.MONGODB_CONNECTION_URL);

const app = express();

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(process.env.PORT, () =>
  console.log(`Listening at http://localhost:${process.env.PORT}`)
);
