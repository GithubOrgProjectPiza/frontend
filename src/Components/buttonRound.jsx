import React from "react";

function ButtonRound(props) {
  return (
    <button class="bg-primary hover:bg-primaryHover rounded-full h-9 w-9 text-white m-3" onClick={props.onaction}>
      {" "}
      {props.name || "Button"}{" "}
    </button>
  );
}
export default ButtonRound;
