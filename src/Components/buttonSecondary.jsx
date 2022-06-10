import React from "react";

function ButtonSecondary(props) {
  return (
    <button class="bg-secondary hover:bg-secondaryHover rounded-full h-9 w-32 text-white m-3" onClick={props.onAction}>
      {" "}
      {props.name || "Button"}{" "}
    </button>
  );
}

export default ButtonSecondary;
