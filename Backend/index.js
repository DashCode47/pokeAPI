const express = require("express");
const mongoose = require("mongoose");
import cors from "cors";
const app = express();
require("dotenv").config();
const pokeRoute = require("./routes/pokeroute");

const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
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
