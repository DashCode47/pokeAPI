import React from "react";
import "./PokeCard.css";
import { Link } from "react-router-dom";
import { Colors } from "../Colors";

const Card = ({ pokeInfo }) => {
  return (
    <div className="cardContainer">
      <img className="img" src={pokeInfo.img} alt="" />
      <div style={{ color: "white" }}>{pokeInfo.name}</div>
      <div className="typesContainer">
        {pokeInfo.tipo.map((x, index) => (
          <div className="typeBox" key={index} style={Colors(x)}>
            {x}
          </div>
        ))}
      </div>
      <Link to="/details" state={pokeInfo}>
        <img
          src={require("../../assets/skip.png")}
          className="iconPoke"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Card;
