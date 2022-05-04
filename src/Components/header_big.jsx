import React from "react";
import p_logo_light from "../pizza_logo_light.png";
import Ueberschrift1 from "./ueberschrift1";

function HeaderBig(props) {
  return (
    <div class="bg-primary h-40 w-full p-2 pl-10 pr-10 flex justify-between items-center">
      <img src={p_logo_light} alt="Logo" class="h-28"></img>
      <Ueberschrift1 name={props.name} />
    </div>
  );
}

export default HeaderBig;
