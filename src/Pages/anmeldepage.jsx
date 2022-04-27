import React, { useState } from "react";
import bild from "../paparoy_liste.png";

function Anmeldepage(props) {
  return (
    <div class="sm:  grid grid-cols-1 items-center">
      <img class="w-50 h-50 col-start-1 col-end-1" src={props.bild || bild} alt="Logo"></img>
    </div>
  );
}
