import React from 'react';

const Button = ({ type, buttonStyleOptions, onButtonPressed, icon, iconStyleOptions, children }) => (
  <button
    className={`${type ? type : 'default'}-button ${buttonStyleOptions}`}
    onClick={() => onButtonPressed()}
    style={{
      backgroundColor:'rgb(58, 58, 58)',
      opacity:'0.7',
      width:240,
      height:70,
      borderRadius: 4,
    }}
  >
    {icon &&
      <i className={`fa fa-${icon} ${iconStyleOptions}`} aria-hidden="true" style={{ paddingRight: children ? '3px' : null }}></i>
    }
    {children}
  </button>
);

export { Button };
