const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const cookieParser = require("cookie-parser");
const middilewareError = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

// route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api", product);
app.use("/api", user);
app.use("/api", order);

// middileware for errors
app.use(middilewareError);

module.exports = app;
