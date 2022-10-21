const express = require("express");
const pokemons = require("../models/pokemons");
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

//GET METHOD
router.get("/", async (req, res) => {
  const pokemon = await Pokemon.find();
  if (!pokemon) res.status(500).send("NOT getted");
  res.send(pokemon);
});
//get by id
router.get("/:pokemonId", async (req, res) => {
  const pokemon = await Pokemon.findOne({
    name: new RegExp(req.params.pokemonId, "i"),
  });
  if (!pokemon) res.status(500).send(error.message);
  res.send(pokemon);
});
//DELETE ENTRY
/* router.delete("/:pokeId", async (req, res) => {
  const pokemon = await Pokemon.findByIdAndRemove(req.params.pokeId);
  if (!pokemon) res.status(404).send("id not found");
  res.send(book);
});
 */
module.exports = router;
