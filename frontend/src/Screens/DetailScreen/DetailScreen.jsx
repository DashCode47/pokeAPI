import React from "react";
import { useLocation } from "react-router-dom";
import "./DetailScreen.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Colors } from "../../Components/Colors";
import StatBar from "../../Components/StatBar/StatBar";

const DetailScreen = () => {
  const location = useLocation();
  const { tipo } = location.state;
  const { altura } = location.state;
  const { peso } = location.state;
  return (
    <div className="root">
      <Link to="/">
        <IoArrowBackCircle className="icon" />
      </Link>

      <div className="containerDetail">
        <div className="pokebox">
          <div>
            <div className="name">{location.state.name}</div>
            <div className="description">{location.state.description}</div>
            <div className="stats">
              <div style={{ fontWeight: "700", color: "white" }}>
                Estadisticas
              </div>
              <div className="statsPoints">
                <div className="listsContainer">
                  <StatBar title={"HP:"} stats={location.state.stats.hp} />
                  <StatBar
                    title={"Ataque:"}
                    stats={location.state.stats.attack}
                  />
                  <StatBar
                    title={"Defensa:"}
                    stats={location.state.stats.defense}
                  />
                </div>
              </div>
            </div>
          </div>
          <img src={location.state.img} className="imgDesc" alt="" />

          <div className="data">
            <div className="tipo">Tipo</div>
            <div className="tiposContainer">
              {tipo.map((tipo) => (
                <div
                  className="tipoChildren"
                  style={Colors(tipo)}
                  key={Math.random()}
                >
                  {tipo}
                </div>
              ))}
            </div>
            <div className="box">
              <div className="medidas">
                <div className="headers">Altura:</div>
                <div>{altura + "m"}</div>
                <div className="headers">Peso:</div>
                <div>{peso + "kg"}</div>
              </div>

              <div className="headers">Evolucion siguiente:</div>
              <div>{location.state.evolucion}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
