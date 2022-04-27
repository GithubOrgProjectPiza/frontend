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

      <img class="sm: w-full h-auto" src={props.bild || bild} alt="Papa Roy"></img>
      {listen}
      <div class="grid grid-cols-4 ">
        <ButtonPrimary name="Warenkorb" class="col-start-3 col-end-3 place-content-end"></ButtonPrimary>
      </div>
    </div>
  );
}

export default Listenansicht;
