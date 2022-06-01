import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Eingabefeld from "../Components/eingabefeld";
import bild from "../pizza_logo_dark.png";
import { Link } from "react-router-dom";

function Registrierung(props) {
  return (
    <div class="sm: m-5">
      <div class="flex justify-center">
        <img class="w-60 h-45" src={props.bild || bild} alt="Logo"></img>
      </div>

      <br></br>
      <br></br>
      <label class="font-medium leading-tight text-3xl mt-0 mb-2">Registrieren</label>
      <br></br>
      <br></br>
      <div class="grid grid-cols-2 grid-rows-2  p-0 gap-x-1 gap-y-0 h-10 md:ml-80 md:pl-20 md:mr-80 md:pr:20">
        <label class="sm: col-start-1 col-end-1 row-start-1 row-end-1">Vorname:</label>
        <label class="sm: col-start-2 col-end-2 row-start-1 row-end-1">Nachname:</label>
        <Eingabefeld
          isPassword={false}
          placeholder="Vorname"
          class="sm: col-start-1 col-end-1 row-start-2 row-end-2"></Eingabefeld>
        <Eingabefeld
          isPassword={false}
          placeholder="Nachname"
          class="col-start-2 col-end-2 row-start-2 row-end-2"></Eingabefeld>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="md:flex justify-center sm:w-full">
        <label class="">E-Mail:</label>
      </div>
      <div className="md:flex justify-center sm:w-full">
        <Eingabefeld isPassword={false} placeholder="Mail"></Eingabefeld>
      </div>

      <div class="md:flex justify-center sm:w-full">
        <label class="">Passwort:</label>
      </div>
      <div class="md:flex justify-center sm:w-full">
        <Eingabefeld isPassword={true} placeholder="Passwort"></Eingabefeld>
      </div>

      <div class="md:flex justify-center sm:w-full">
        <label class="">Passwort erneut:</label>
      </div>
      <div className="md:flex justify-center sm:w-full">
        <Eingabefeld isPassword={false} placeholder="Passwort erneut"></Eingabefeld>
      </div>

      <br></br>
      <br></br>
      <div class="sm: flex justify-between md:justify-center">
        <Link to="/">
          <ButtonPrimary name="Registieren"></ButtonPrimary>
        </Link>
        <Link to="/anmeldung">
          <ButtonPrimary name="Anmelden"></ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}
export default Registrierung;
