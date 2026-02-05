import { Form, Link } from "react-router-dom";
import { FomrInput, SumbitBtn } from "./../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card  w-96 bg-base-100 shadow-lg flex flex-col p-7"
      >
        <div className="items-center justify-center flex text-2xl font-semibold">
          <h2 className="mb-3">Register</h2>
        </div>
        <FomrInput
          type={"text"}
          label={"Username"}
          name={"indentier"}
          defaultValue={"test@gmail.com"}
        />
        <FomrInput
          type={"email"}
          label={"email"}
          name={"indentier"}
          defaultValue={"test@gmail.com"}
        />
        <br />
        <FomrInput
          type={"password"}
          label={"password"}
          name={"indentier"}
          defaultValue={"test@gmail.com"}
        />
        <SumbitBtn text={"Register"} />
        <p className="text-center mt-4">
          Already a member?
          <Link to={"/login"}> login</Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
