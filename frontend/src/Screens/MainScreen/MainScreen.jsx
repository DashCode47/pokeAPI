import React, { useState, useEffect } from "react";
import PokeList from "../../Components/PokeList/PokeList";
import axios from "axios";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./MainScreen.css";

import Banner from "../../Components/Banner/Banner";
function MainScreen() {
  const [pokemon, setpokemon] = useState([]);
  const currentPage =
    "https://krugerproxy.herokuapp.com/https://fathomless-bastion-21061.herokuapp.com/pokemons/";
  const [loading, setloading] = useState(true);
  const [searchedItem, setsearchedItem] = useState("");
  const [filtered, setfiltered] = useState(false);
  const fetchController = new AbortController();

  /*/////////////// hacer request a la API de todos los pokemons al iniciar*/
  useEffect(() => {
    const fetchController = new AbortController();
    setloading(true);
    const { signal } = fetchController;
    let timeOut = setTimeout(() => {
      fetchController.abort();
      setloading(false);
    }, 3500);
    try {
      axios
        .get(currentPage, {
          signal,
        })
        .then((response) => {
          clearTimeout(timeOut);
          setloading(false);
          setpokemon(response.data);
        });
    } catch (e) {
      alert(e.message);
      return;
    }
  }, []);

  /* ///////////////Funcion para buscar por nombre */
  const onSearch = async (name) => {
    const { signal } = fetchController;
    let timeOut = setTimeout(() => {
      fetchController.abort();
      setloading(false);
    }, 1500);
    setloading(true);
    try {
      let res = await axios.get(
        `https://krugerproxy.herokuapp.com/https://fathomless-bastion-21061.herokuapp.com/pokemons/${name}`,
        { signal }
      );
      clearTimeout(timeOut);
      setsearchedItem(res.data);
      setfiltered(true);
      setloading(false);
    } catch (err) {
      setfiltered(false);
      alert("Algo salio mal");
    }
  };

  if (loading)
    return (
      <div className="spinnerContainer">
        <img
          src={require("../../assets/pokeball.gif")}
          alt="Loading..."
          className="spinner"
        />
      </div>
    );

  return (
    <div className="container">
      <div className="background">
        <img
          src={require("../../assets/wallpaper2.jpg")}
          className="wallpaper"
          alt=""
        />
        <img src={require("../../assets/logo2.png")} className="logo" alt="" />
      </div>
      <Banner />
      <SearchBar onSearch={onSearch} />

      <PokeList
        pokemon={pokemon}
        searchedItem={searchedItem}
        filtered={filtered}
      />
      {filtered && (
        <img
          onClick={() => setfiltered(false)}
          src={require("../../assets/left-arrow.png")}
          className="goBack"
          alt=""
        />
      )}
    </div>
  );
}

export default MainScreen;
