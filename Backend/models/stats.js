const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  hp: {
    type: Number,
  },
  attack: {
    type: Number,
  },
  defense: {
    type: Number,
  },
});
module.exports = new mongoose.model("Stats", StatsSchema);
