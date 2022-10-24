const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemons");
///////////////////////////POST CREATE METHOD////////////////////////////////
router.post("/", (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    description: req.body.description,
    tipo: req.body.tipo,
    evolucion: req.body.evolucion,
    altura: req.body.altura,
    peso: req.body.peso,
    image: req.body.img,
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
    },
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

//////////////////////////////GET METHOD//////////////////////////////////
router.get("/", async (req, res) => {
  const pokemon = await Pokemon.find();
  if (!pokemon) res.status(500).send("NOT getted");
  res.send(pokemon);
});
//get by name
router.get("/:pokemonId", async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({
      name: new RegExp(req.params.pokemonId, "i"),
    });
    res.send(pokemon);
  } catch (e) {
    res.status(500).send(error.message);
  }
});
//DELETE ENTRY
/* router.delete("/:pokeId", async (req, res) => {
  const pokemon = await Pokemon.findByIdAndRemove(req.params.pokeId);
  if (!pokemon) res.status(404).send("id not found");
  res.send(book);
});
 */
module.exports = router;
