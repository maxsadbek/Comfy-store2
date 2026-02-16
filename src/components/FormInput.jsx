import { Form } from "react-router-dom";

const FomrInput = ({ label, name, type, defaultValue, size}) => {
  return (
    <fieldset className="fieldest mt-6">
      <legend className="fieldest-legend mb-1 capitalize">{label}</legend>
      <input type={type} defaultValue={defaultValue} name={name} placeholder="Type here" className={`input ${size}`}/>
    </fieldset>
  );
};

export default FomrInput;
