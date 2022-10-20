const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
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
/* aa */
