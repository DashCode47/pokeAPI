const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const pokeRoute = require("./routes/pokeroute");

const PORT = process.env.PORT || 3000;

//middlewares
const allowCrossDomain = function (req, res, next) {
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/pokemons", pokeRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to mdb");
  })
  .catch((error) => {
    console.log("Something wrong happende", error);
  });
/* START SERVER */
app.listen(PORT, () => {
  console.log("server started at PORT ", PORT);
});
