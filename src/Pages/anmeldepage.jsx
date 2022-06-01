import React, { useState } from "react";
import ButtonPrimary from "../Components/buttonPrimary";
import Eingabefeld from "../Components/eingabefeld";
import bild from "../pizza_logo_dark.png";
import { Link } from "react-router-dom";

function Anmeldepage(props) {
  return (
    <div class="sm: m-2 items-center">
      <div class="flex justify-center">
        <img class="w-60 h-45" src={props.bild || bild} alt="Logo"></img>
      </div>
      <br></br>
      <br></br>
      <label class="font-medium leading-tight text-3xl mt-0 mb-2">Anmelden</label>
      <br></br>
      <br></br>
      <div class="md:flex justify-center sm:w-full">
        <label className="sm:absolute-left-0">E-Mail:</label>
      </div>
      <div class="md:flex justify-center sm:w-full">
        <Eingabefeld isPassword={false} placeholder="Mail"></Eingabefeld>
      </div>

      <div class="md:flex justify-center sm:w-full">
        <label className="sm:absolute-left-0">Passwort:</label>
      </div>
      <div class="md:flex justify-center sm:w-full">
        <Eingabefeld isPassword={true} placeholder="Passwort"></Eingabefeld>
      </div>
      <br></br>
      <br></br>
      <div class="flex justify-between md:justify-center">
        <Link to="/registrierung">
          <ButtonPrimary name="Registieren"></ButtonPrimary>
        </Link>
        <Link to="/">
          <ButtonPrimary name="Anmelden"></ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}
export default Anmeldepage;
