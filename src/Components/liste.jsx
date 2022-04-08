import React, { useState } from "react";

function Liste(props) {
  var gericht = props.gericht;
  var price = props.price;

  return (
    <div class="grid grid-cols-3 gap-0">
      <div>{gericht}</div>
      <div class="place-content-end">{price}</div>
      <div>
        <button>enter</button>
      </div>
    </div>
  );
}

export default Liste;
