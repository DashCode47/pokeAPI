import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [name, setname] = useState("");
  return (
    <div className="containSearch">
      <input
        placeholder="buscar por nombre"
        onChange={(event) => setname(event.target.value.toLowerCase())}
        value={name}
      />
      <button onClick={() => onSearch(name)}>filter</button>
    </div>
  );
};

export default SearchBar;
