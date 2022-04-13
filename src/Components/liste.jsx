import React, { useState } from "react";

function Liste(props) {
  var gericht = props.gericht;
  var price = props.price;

  return (
    <div class={props.isColor ? "grid grid-cols-5 gap-0 bg-slate-200 p-4" : "grid grid-cols-4 gap-0 bg-white p-4"}>
      <div class="col-start-1 col-end-1">{gericht}</div>
      <div class="place-content-end col-start-4 col-end-4">{price}</div>
      <div class="col-start-5 col-end-5 place-content-end">
        <button>enter</button>
      </div>
    </div>
  );
}

export default Liste;
