import React, { useState } from "react";
import ButtonRound from "./buttonRound";

function Liste(props) {
  var gericht = props.gericht;
  var price = props.price;

  return (
    <div
      class={
        props.isColor
          ? "grid grid-cols-6 gap-0 bg-slate-200 p-4 items-center"
          : "grid grid-cols-6 gap-0 bg-white p-4 items-center"
      }>
      <div class="col-start-1 col-end-1 ">{gericht}</div>
      <div class="place-content-end col-start-4 col-end-4 ">{price}</div>
      <div class="col-start-6 col-end-6 place-content-end ">
        <ButtonRound name="+"></ButtonRound>
      </div>
    </div>
  );
}

export default Liste;
