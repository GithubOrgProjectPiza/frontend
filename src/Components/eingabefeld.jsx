import React, { useState } from "react";

function Eingabefeld(props) {
  return (
    <div class="pb-2">
      <br />
      <input
        className="form-control
        border-radius: 5px
        block
        w-full
        h-35
        p-5
        px-3
        py-1.5
        text-base
        font-normal
        border border-solid border-gray-300
        rounded"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        type={props.isPassword ? "password" : "text"}
      />
    </div>
  );
}
export default Eingabefeld;
