const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())

//Route imports
const product = require("./routers/productRoute");

app.use("/api/v1", product);

// middleware for errors
app.use(errorMiddleware);


module.exports = app