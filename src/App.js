import React from "react";
import "./styles.css";
//import components here like below
import Pokemon from "./components/Pokemon";
import StickyHeader from "./components/StickyHeader"

export default function PokeDex() {
  return (
    <div className="home">
      <StickyHeader />
      <Pokemon />
    </div>
  );
}
