import React, { useState } from "react";
import Header1 from "../Components/header_1";
import warenkorb_image from "../warenkorb_icon.png";
import restaurant_image from "../restaurant_icon.png";
import kassa_image from "../kassa_icon.png";
import Liste from "../Components/liste";
import ButtonSecondary from "../Components/buttonSecondary";
import { Link } from "react-router-dom";

function Warenkorb(props) {
  //Übergabe vom Namen des Restaurants (merken von Cards?!)

  //Speicherung der gewählten Gerichte von der Listenansicht (muss an diese Page übergeben werden)
  //Code mit Demoliste

  //Summe der Preise muss noch gebildet werden mit umwandlung in fließkomma wert

  var color_liste = true;
  var sum = 0;
  var number = localStorage;
  console.log(number);

  const [listen, setlisten] = useState(JSON.parse(localStorage.getItem("gerichte")) ?? []);

  var liste = [];
  console.log(listen);

  /*for (let index = 0; index < number; index++) {
    var name = listen.at(index).name;
    console.log(name);
    listen.push(<Liste gericht="Gericht" price="12,99€" isColor={color_liste} icon_button="-"></Liste>);
    if (color_liste == true) {
      color_liste = false;
    } else {
      color_liste = true;
    }
  }*/

  //console.log(JSON.parse(localStorage.getItem("gerichte")) ?? []);
  listen.forEach(function (g, i) {
    console.log(g.preis, g.name, g.index);
    liste.push(
      <Liste
        gericht={g.name}
        price={g.preis}
        isColor={color_liste}
        icon_button="-"
        index={i}
        setlisten={setlisten}></Liste>
    );
    if (color_liste == true) {
      color_liste = false;
    } else {
      color_liste = true;
    }
    var s = Number(g.preis.substring(0, g.preis.length - 1).replace(",", "."));
    sum += s;
  });

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
      {liste}
      <br></br>
      <br></br>
      <div class="flex justify-between pt-6 pb-6 bg-primary">
        <img src={kassa_image} alt="Kassa"></img>
        <label class="font-medium  text-2xl text-white items-center">Summe: {Math.round(sum * 100) / 100}€ </label>
      </div>
      <br></br>
      <br></br>
      <div class="flex justify-between">
        <Link to="/">
          <ButtonSecondary name="Zurück"></ButtonSecondary>
        </Link>
        <Link to="/endpage">
          <ButtonSecondary name="Bestätigen"></ButtonSecondary>
        </Link>
      </div>
    </div>
  );
}

export default Warenkorb;
