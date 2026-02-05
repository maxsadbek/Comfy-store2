import { Form } from "react-router-dom";

const FomrInput = ({ label, name, type, defaultValue}) => {
  return (
    <fieldset className="fieldest">
      <legend className="fieldest-legend">{label}</legend>
      <input type={type} defaultValue={defaultValue} name={name} placeholder="Type here" />
    </fieldset>
  );
};

export default FomrInput;
