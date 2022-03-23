import React, { useState } from "react";

function Eingabefeld(props) {
  const [usepollName, setPollName] = useState("");
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form-control
        block
        w-220
        h-35
        px-3
        py-1.5
        text-base
        font-normal
        border border-solid border-gray-300
        rounded
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => setPollName(e.target.value)}
        value={usepollName}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default Eingabefeld;
