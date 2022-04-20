import React from "react";
import bild from "../paparoy.jpg";
import ButtonPrimary from "./buttonPrimary";

function Card(props) {
  return (
    <div class="w-full rounded-xl overflow-hidden shadow-lg bg-gray1 ">
      <img class="w-full max-h-60 object-fill" src={props.bild || bild} alt="Papa Roy"></img>
      <div class="px-6 py-4 flex justify-between">
        <div class="font-bold text-xl flex justify-start m-3">{props.name || "Restaurant"}</div>
        <ButtonPrimary name="Speisekarte" />
      </div>
    </div>
  );
}

export default Card;
