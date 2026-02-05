import { Form } from "react-router-dom";

const FomrInput = ({ label, name, type, defaultValue}) => {
  return (
    <fieldset className="fieldest mt-6">
      <legend className="fieldest-legend mb-1">{label}</legend>
      <input type={type} defaultValue={defaultValue} name={name} placeholder="Type here" className="input"/>
    </fieldset>
  );
};

export default FomrInput;
