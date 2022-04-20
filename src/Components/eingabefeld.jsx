import React, { useState } from "react";

function Eingabefeld(props) {
  const [usepollName, setPollName] = useState("");
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input
        className="form-control
        border-radius: 5px
        block
        w-220
        h-35
        px-3
        py-1.5
        text-base
        font-normal
        border border-solid border-gray-300
        rounded"
        onChange={(e) => setPollName(e.target.value)}
        value={usepollName}
        placeholder={props.placeholder}
        type={props.isPassword ? "password" : "text"}
      />
    </div>
  );
}
export default Eingabefeld;
