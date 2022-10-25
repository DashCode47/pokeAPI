import React, { useState } from "react";
import "./SearchBar.css";
import { FcSearch } from "react-icons/fc";

const SearchBar = ({ onSearch }) => {
  const [name, setname] = useState("");
  return (
    <div className="containSearch">
      <>
        <input
          className="input"
          placeholder="buscar por nombre"
          onChange={(event) => setname(event.target.value.toLowerCase())}
          value={name}
        />

        <button onClick={() => onSearch(name)} className="btn_search">
          <FcSearch className="icon_search" />
        </button>
      </>
    </div>
  );
};

export default SearchBar;
