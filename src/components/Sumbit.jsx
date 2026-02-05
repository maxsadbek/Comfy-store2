import React from "react";

const Sumbit = ({ text, Bgcolor, textColor }) => {
  return <button className={`${(Bgcolor, textColor)} btn btn-primary mt-5`}>{text}</button>;
};

export default Sumbit;
