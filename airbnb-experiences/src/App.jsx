import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import data from "./Data";

function App() {
  //*** RENDERS THE <CARD/> COMPONENENT WITH THE VALUES FROM "Data.js"
  const cardData = data.map((item) => (
    <Card
      key={item.id}
      item={item}
    />
  ));

  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="card-container">{cardData}</div>
    </div>
  );
}

export default App;

// {
//    <Card
//   img={"public/katie-zaferes.png"}
//   rating={5.0}
//   reviewCount={6}
//   country="USA"
//   title="Life Lessons with Katie Zaferes"
//   price={136}
// />; 
// }

// img={`public/${item.coverImg}`}
//       rating={item.stats.rating}
//       reviewCount={item.stats.reviewCount}
//       location={item.location}
//       title={item.title}
//       price={item.price}
//       openSpots={item.openSpots}
