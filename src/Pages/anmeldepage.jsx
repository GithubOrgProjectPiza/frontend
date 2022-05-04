import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Eingabefeld from "../Components/eingabefeld";
import bild from "../pizza_logo_dark.png";

function Anmeldepage(props) {
  return (
    <div class="sm: m-2">
      <div class="sm:  grid grid-cols-5 items-center">
        <img
          class="sm:w-60 h-45 p-5 grid col-span-3 col-start-2 place-content-center"
          src={props.bild || bild}
          alt="Logo"></img>
      </div>
      <br></br>
      <br></br>
      <label class="font-medium leading-tight text-3xl mt-0 mb-2">Anmelden</label>
      <br></br>
      <br></br>
      <label class="absolute left-0">E-Mail:</label>
      <Eingabefeld isPassword={false} placeholder="Mail"></Eingabefeld>
      <label class="absolute left-0">Passwort:</label>
      <Eingabefeld isPassword={true} placeholder="Passwort"></Eingabefeld>
      <br></br>
      <br></br>
      <div class="sm: flex justify-between">
        <ButtonPrimary name="Registieren"></ButtonPrimary>
        <ButtonPrimary name="Anmelden"></ButtonPrimary>
      </div>
    </div>
  );
}
export default Anmeldepage;
