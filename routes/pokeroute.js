const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemons");
//POST CREATE
router.post("/", (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    description: req.body.description,
    tipo: req.body.tipo,
    evolucion: req.body.evolucion,
    altura: req.body.altura,
    peso: req.body.peso,
  });
  pokemon
    .save()
    .then((pokemon) => {
      res.send(pokemon);
    })
    .catch((error) => {
      res.status(500).send("NOT STORED");
    });
});

module.exports = router;
