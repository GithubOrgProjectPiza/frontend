import React, { useState } from "react";
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
      <label class="font-medium leading-tight text-3xl mt-0 mb-2">Anmelden</label>
      <br></br>
      <label class="absolute left-0">E-Mail:</label>
      <Eingabefeld isPassword={false}></Eingabefeld>
    </div>
  );
}
export default Anmeldepage;
