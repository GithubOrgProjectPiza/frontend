import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Header1 from "../Components/header_1";
import Liste from "../Components/liste";
import bild from "../paparoy_liste.png";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

function Listenansicht() {
  var props = useParams();
  var color_liste = true;
  var { id } = props;
  let listen = [];

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(process.env.REACT_APP_SERVER_IP + "restaurant/" + id).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  console.log(data);

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
      <div class="flex justify-end ">
        <ButtonPrimary name="Restaurants"></ButtonPrimary>
        <Link to="/warenkorb">
          <ButtonPrimary name="Warenkorb"></ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}

export default Listenansicht;
