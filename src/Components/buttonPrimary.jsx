import React from "react";

function ButtonPrimary(props) {
  return <button class="bg-primary hover:bg-primaryHover rounded-full h-9 w-32 text-white m-3"> {props.name || "Button"} </button>;
}

export default ButtonPrimary;