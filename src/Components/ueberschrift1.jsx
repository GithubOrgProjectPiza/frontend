import React from "react";

function Ueberschrift1(props) {
  return <p class="font-bold text-4xl text-white">{props.name || "Text"}</p>;
}

export default Ueberschrift1;
