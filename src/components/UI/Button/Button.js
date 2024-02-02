import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button
      type={props.type}
      className={`button ${props.disabled ? 'notAdded' : 'added'}`}
      onClick={props.onClick}
      disabled={props.disabled}
      onBlur={props.onBlur}>
      {props.children}
    </button>
  );
};

export default Button;
