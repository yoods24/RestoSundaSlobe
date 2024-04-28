import { useState } from "react";
import "./App.css";
import CardData from "./Card-data.tsx";
import Menudata from "./Menudata.tsx";
import Card from "./components/Card.tsx";
import Content from "./components/Content.tsx";
import Header from "./components/Header.tsx";
import Total from "./components/Total.tsx"; // Import komponen Total

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dataMhs = CardData.data.map((item) => {
    return <Card {...item} />;
  });

  const [totalFood, setTotalFood] = useState(0); // State for total food
  const [totalDrink, setTotalDrink] = useState(0); // State for total drink

  const updateTotalFood = (newTotal: number) => {
    setTotalFood(newTotal);
  };

  const updateTotalDrink = (newTotal: number) => {
    setTotalDrink(newTotal);
  };

  const food = Menudata.makanan.map((menu) => {
    return (
      <Content
        menu={menu}
        updateTotal={updateTotalFood}
        total={totalFood}
        key={menu.id}
      />
    );
  });

  const drink = Menudata.minuman.map((menu) => {
    return (
      <Content
        menu={menu}
        updateTotal={updateTotalDrink}
        total={totalDrink}
        key={menu.id}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="kontener">
        <h2>Kelompok 2 RPLBK</h2>
        <h3>Daftar Kelompok</h3>
        <div className="br"></div>
        {dataMhs}
        <p className="hov">
          <span className="arrow-top">&#8605;</span>
        </p>
      </div>
      <main className="main">
        <div className="banner">
          <h1 className="sunda-slobe">RestoranSundaSlobe</h1>
          <button
            onClick={() => scrollToSection("section1")}
            className="button-33"
          >
            Beli
          </button>
        </div>
        <h2 id="section1">Makanan</h2>
        {food}
        <br />
        <h2>Minuman</h2>
        {drink}

        <Total totalFood={totalFood} totalDrink={totalDrink} />
      </main>
    </>
  );
}
