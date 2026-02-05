import React from "react";

const Sumbit = ({ text, Bgcolor, textColor }) => {
  return <button className={`${(Bgcolor, textColor)}`}>{text}</button>;
};

export default Sumbit;
