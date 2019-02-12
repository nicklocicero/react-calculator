import React from "react";

import "./Button.css";

const button = props => {
  return (
    <div style={{display: 'inline-grid'}}>
    <button
      type="button"
      onClick={props.action}
    >
      {props.val}
    </button>
    </div>
  );
};

export default button;

// for style
// style={props.val === "clear" ? {flexGrow: '1'} : null}

      //onClick={props.addDigit ? props.addDigit(props.val) : null}
