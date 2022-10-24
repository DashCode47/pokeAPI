const mongoose = require("mongoose");
const Stats = require("./stats");
/* POKEMON SCHEMA */
const PokeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tipo: {
    type: Array,
  },
  evolucion: {
    type: String,
  },
  altura: {
    type: Number,
  },
  peso: {
    type: Number,
  },
  stats: Stats.schema,
  image: {
    type: String,
  },
});

module.exports = new mongoose.model("Pokemon", PokeSchema);
