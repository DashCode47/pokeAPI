import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import DetailScreen from "./Screens/DetailScreen/DetailScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/details" element={<DetailScreen />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default App;
