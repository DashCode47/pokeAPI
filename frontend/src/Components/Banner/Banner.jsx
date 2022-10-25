import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner_Container">
      <img
        src={require("../../assets/pikachu.png")}
        className="pikachu"
        alt=""
      />
      <div className="container_title">
        <img
          src={require("../../assets/kruger.png")}
          className="kruger_logo"
          alt=""
        />
        <div className="banner_txt">PokeAPI Challenge</div>
      </div>

      <div className="banner_subtxt">
        Aqui puedes encontrar a tus pokemons preferidos
      </div>
      <div className="aboutme">realizado por:David Lozada</div>
    </div>
  );
};

export default Banner;
