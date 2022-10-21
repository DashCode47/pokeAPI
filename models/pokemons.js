const mongoose = require("mongoose");

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
    type: String,
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
});

module.exports = new mongoose.model("Pokemon", PokeSchema);
