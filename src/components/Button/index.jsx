import React from "react";

function Button({label, ...attr}) {
  return (
    <button {...attr} >
      {label}
    </button>
  );
}

export default Button;
