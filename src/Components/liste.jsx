import React, { useState } from "react";
import ButtonRound from "./buttonRound";

function Liste(props) {
  var gericht = props.gericht;
  var price = props.price;
  let icon_button = props.icon_button;
  var key = 0;
  var i = props.index;
  const gericht1 = { name: gericht, preis: price, index: i };

  //localStorage.setItem("gericht", JSON.stringify(gericht1));

  return (
    <div
      className={
        props.isColor
          ? "bg-gray1 grid grid-cols-6 gap-0 p-4 items-center"
          : " bg-white grid grid-cols-6 gap-0 p-4 items-center"
      }>
      <div class="col-start-1 col-end-1">{gericht}</div>
      <div class="place-content-end col-start-4 col-end-4 ">{price}</div>
      <div class="col-start-6 col-end-6 place-content-end ">
        <ButtonRound
          name={icon_button}
          onaction={() => {
            if (props.icon_button == "-") {
              console.log(i);
              let gerichte = JSON.parse(localStorage.getItem("gerichte"));
              gerichte.splice(i, 1);
              props.setlisten(gerichte);
              localStorage.setItem("gerichte", JSON.stringify(gerichte));
            } else {
              const gerichte = JSON.parse(localStorage.getItem("gerichte")) ?? [];
              gerichte.push(gericht1);
              console.log(gerichte);
              localStorage.setItem("gerichte", JSON.stringify(gerichte));
              i++;
            }
          }}></ButtonRound>
      </div>
    </div>
  );
}

export default Liste;
