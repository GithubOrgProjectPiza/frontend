import React from "react";

function Ueberschrift2(props) {
  return <p class="font-bold text-xl">{props.name || "Text"}</p>;
}

export default Ueberschrift2;
