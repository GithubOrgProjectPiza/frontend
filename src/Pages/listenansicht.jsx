import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Header1 from "../Components/header_1";
import Liste from "../Components/liste";
import bild from "../paparoy_liste.png";
import { useQuery } from "react-query";

function Listenansicht(props) {
  var color_liste = true;
  var run = 0;
  let listen = [];

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(process.env.REACT_APP_SERVER_IP + "pizza/").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  for (let index = 0; index < data.length; index++) {
    listen.push(
      <Liste gericht={data[index].name} price={data[index].description} isColor={color_liste} icon_button="+"></Liste>
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
        <img class="sm: w-full h-auto" src={props.bild || bild} alt="Papa Roy"></img>
      </div>
      {listen}
      <div class="flex justify-end ">
        <ButtonPrimary name="Warenkorb"></ButtonPrimary>
      </div>
    </div>
  );
}

export default Listenansicht;
