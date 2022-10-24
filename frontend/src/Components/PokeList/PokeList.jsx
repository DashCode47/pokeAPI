import React from "react";
import Card from "../PokemonCard/Card";
import "./Pokelist.css";

const PokeList = ({ pokemon, searchedItem, filtered }) => {
  return (
    <div className="containerList">
      {pokemon.map((results, index) => {
        if (
          index % 2 === 0 &&
          index < pokemon.length - 1 &&
          pokemon.length > 1 &&
          !filtered
        )
          return (
            <div className="gridContainer" key={results._id}>
              <Card pokeInfo={pokemon[index]} />
              <Card pokeInfo={pokemon[index + 1]} />
            </div>
          );
      })}
      {filtered && searchedItem !== "" && <Card pokeInfo={searchedItem} />}
      {searchedItem === "" && filtered && (
        <div className="notFoundPage">
          <div className="notFoundTitle">Quien es ese pokemon?</div>
          <img
            src={require("../../assets/empty2.gif")}
            className={"emptyImg"}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default PokeList;
