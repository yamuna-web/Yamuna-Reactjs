import React from "react";
import "./styles.css";

const Child = ({ theme }) => {
  const text = "this is from child";
  return (
    <div className={theme}>
      <p>{text}</p>
    </div>
  );
};

export default Child;