import React from "react";
import "./button.styles.scss";

/**
 * @param children This transfer all the data which we wrapped between the component tag
 * @param onClick Run onclick function when the button is clicked
 * @param type defining the type of the button
 * @param variant defining the class needed for each button dynamically
 * @param disabled define if the button should be disable or enable
 * 
 * @returns JSX Button Template
 */

function Button({ children, onClick, type, variant, disabled = false }) {
  return (
    <button
      type={type}
      className={`button ${variant} ${disabled && "disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
