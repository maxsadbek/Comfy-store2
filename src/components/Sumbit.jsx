import React from "react";

const Sumbit = ({ text, Bgcolor, textColor }) => {
  return <button className={`${(Bgcolor, textColor)} btn btn-primary`}>{text}</button>;
};

export default Sumbit;
