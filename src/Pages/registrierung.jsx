import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Eingabefeld from "../Components/eingabefeld";
import bild from "../pizza_logo_dark.png";

function Registrierung(props) {
  return (
    <div class="sm: m-5">
      <div class="sm:  grid grid-cols-5 items-center">
        <img
          class="sm:w-60 h-45 p-5 grid col-span-3 col-start-2 place-content-center"
          src={props.bild || bild}
          alt="Logo"></img>
      </div>

      <br></br>
      <br></br>
      <label class="font-medium leading-tight text-3xl mt-0 mb-2">Registrieren</label>
      <br></br>
      <br></br>
      <div class="grid grid-cols-2 grid-rows-2 justify-items-start p-0 gap-x-1 gap-y-0 h-10">
        <label class="col-start-1 col-end-1 row-start-1 row-end-1">Vorname:</label>
        <label class="col-start-2 col-end-2 row-start-1 row-end-1">Passwort:</label>
        <Eingabefeld
          isPassword={false}
          placeholder="Mail"
          class="col-start-1 col-end-1 row-start-2 row-end-2"></Eingabefeld>
        <Eingabefeld
          isPassword={true}
          placeholder="Passwort"
          class="col-start-2 col-end-2 row-start-2 row-end-2"></Eingabefeld>
      </div>
      <br></br>
      <br></br>
      <div class="pt-2">
        <label class="absolute left-2">E-Mail:</label>
        <Eingabefeld isPassword={false} placeholder="Mail"></Eingabefeld>
      </div>

      <div class="pt-2">
        <label class="absolute left-2">Passwort:</label>
        <Eingabefeld isPassword={true} placeholder="Passwort"></Eingabefeld>
      </div>

      <div class="pt-2">
        <label class="absolute left-2">Passwort erneut:</label>
        <Eingabefeld isPassword={false} placeholder="Passwort erneut"></Eingabefeld>
      </div>

      <br></br>
      <br></br>
      <div class="sm: flex justify-between">
        <ButtonPrimary name="Registieren"></ButtonPrimary>
        <ButtonPrimary name="Anmelden"></ButtonPrimary>
      </div>
    </div>
  );
}
export default Registrierung;
