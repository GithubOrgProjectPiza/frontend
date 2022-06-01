import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Header1 from "../Components/header_1";
import Liste from "../Components/liste";
import bild from "../paparoy_liste.png";
import { useQuery } from "react-query";

function Listenansicht(props) {
  var color_liste = true;
  var id = 1;
  let listen = [];

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(process.env.REACT_APP_SERVER_IP + "restaurant/" + id).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  for (let index = 0; index < data.pizzas.length; index++) {
    listen.push(
      <Liste
        gericht={data.pizzas[index].name}
        price={data.pizzas[index].price}
        isColor={color_liste}
        icon_button="+"></Liste>
    );
    if (color_liste == true) {
      color_liste = false;
    } else {
      color_liste = true;
    }
  }
  return (
    <div>
      <Header1></Header1>
      <div className="bg-slate-400">
        <img class="sm: w-full h-auto" src={props.bild || bild} alt="Speisekartenlogo"></img>
      </div>
      {listen}
      <div className="flex justify-between">
        <div>
          <ButtonPrimary name="Restaurants"></ButtonPrimary>
        </div>
        <div>
          <ButtonPrimary name="Warenkorb"></ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default Listenansicht;
