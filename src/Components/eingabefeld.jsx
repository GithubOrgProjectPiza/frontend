import React, { useState } from "react";

function Eingabefeld(props) {
  const [usepollName, setPollName] = useState("");
  return (
    <div>
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
        onChange={(e) => setPollName(e.target.value)}
        value={usepollName}
        placeholder={props.placeholder}
        type={props.isPassword ? "password" : "text"}
      />
    </div>
  );
}
export default Eingabefeld;
