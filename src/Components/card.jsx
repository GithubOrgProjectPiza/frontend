import React from "react";
import bild from "../paparoy.jpg";
import ButtonPrimary from "./buttonPrimary";
import Ueberschrift2 from "./ueberschrift2";

function Card(props) {
  return (
    <div class="w-full rounded-xl overflow-hidden shadow-lg bg-gray1">
      <div class="h-60">
        <img class="w-full h-full object-cover" src={props.bild || bild} alt="Papa Roy"></img>
      </div>
      <div class="px-6 py-4 flex justify-between">
        <div class="font-bold text-xl flex justify-start m-3">
          <Ueberschrift2 name={props.name} />
        </div>
        <ButtonPrimary name="Speisekarte" />
      </div>
    </div>
  );
}

export default Card;
