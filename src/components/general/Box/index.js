import React from "react";
import "./box.styles.scss";

/**
 * 
 * @param children Shows everything wrapped inside the Box component 
 * @param className Gets the additional class names added to the component 
 * @returns JSX Element
 */
function Box(props) {
  const { children, className } = props;

  return <div className={`box ${className}`}>{children}</div>;
}

export default Box;
