import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Card />
    </div>
  );
}

export default App;
