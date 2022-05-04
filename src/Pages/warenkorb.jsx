import React, { useState } from "react";
import Header1 from "../Components/header_1";
import warenkorb_image from "../warenkorb_icon.png";
import restaurant_image from "../restaurant_icon.png";
import kassa_image from "../kassa_icon.png";
import Liste from "../Components/liste";
import ButtonSecondary from "../Components/buttonSecondary";

function Warenkorb(props) {
  //Übergabe vom Namen des Restaurants (merken von Cards?!)

  //Speicherung der gewählten Gerichte von der Listenansicht (muss an diese Page übergeben werden)
  //Code mit Demoliste

  //Summe der Preise muss noch gebildet werden mit umwandlung in fließkomma wert

  var color_liste = true;
  var number = 3;
  let listen = [];

  for (let index = 0; index < number; index++) {
    listen.push(<Liste gericht="Pizza" price="12,99€" isColor={color_liste} icon_button="-"></Liste>);
    if (color_liste == true) {
      color_liste = false;
    } else {
      color_liste = true;
    }
  }
  return (
    <div className="mb-5">
      <Header1></Header1>
      <br></br>
      <div class="flex sm:flex-row md:flex-row-reverse md:justify-between pt-3 pb-3">
        <img src={warenkorb_image} alt="Warenkorbicon"></img>
        <label class="font-medium leading-tight text-3xl mt-0 mb-2">Warenkorb</label>
      </div>
      <br></br>
      <div class="flex sm:flex-row md:flex-row-reverse md:justify-between pt-6 pb-6 bg-primary">
        <img src={restaurant_image} alt="Restauranticon"></img>
        <label class="font-medium leading-tight text-3xl mt-0 mb-2 text-white">
          {props.restaurant || "Restaurant"}
        </label>
      </div>

      <br></br>
      <br></br>
      {listen}
      <br></br>
      <br></br>
      <div class="flex justify-between pt-6 pb-6 bg-primary">
        <img src={kassa_image} alt="Kassa"></img>
        <label class="font-medium  text-2xl text-white items-center">Summe: 25,98€</label>
      </div>
      <br></br>
      <br></br>
      <div class="flex justify-between">
        <ButtonSecondary name="Zurück"></ButtonSecondary>
        <ButtonSecondary name="Bestätigen"></ButtonSecondary>
      </div>
    </div>
  );
}

export default Warenkorb;
