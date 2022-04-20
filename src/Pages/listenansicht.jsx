import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Header1 from "../Components/header_1";
import Liste from "../Components/liste";
import bild from "../paparoy_liste.png";

function Listenansicht(props) {
  var color_liste = true;
  var number = 2;
  var run = 0;
  let listen = [];

  //Daten von Backend erforderlich + Bild vom jeweiligen Restaurant erforderlich
  for (let index = 0; index < number; index++) {
    listen.push(<Liste gericht="Pizza" price="12,99€" isColor={color_liste}></Liste>);
    if (color_liste == true) {
      color_liste = false;
    } else {
      color_liste = true;
    }
  }
  return (
    <div>
      <Header1></Header1>

      <img class="sm: w-full md: w-full md: h-15" src={props.bild || bild} alt="Papa Roy"></img>
      {listen}
      <div class="sm: grid grid-cols-2 items-center">
        <div class="col-start-1 col-end-1"></div>
        <ButtonPrimary name="Warenkorb" class="col-start-2 col-end-2 place-content-end"></ButtonPrimary>
      </div>
    </div>
  );
}

export default Listenansicht;
