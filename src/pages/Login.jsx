import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card  w-96 bg-base-100 shadow-lg flex flex-col p-7"
      >
        <div className="items-center justify-center flex text-2xl font-semibold">
          <h2 className="mb-3">Log In</h2>
        </div>
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
        <Link to={"/"}>
          <SumbitBtn text={"Register"} />
        </Link>
        <p className="text-center mt-4">
          Already a member?
          <Link to={"register"}>Register</Link>
        </p>
      </Form>
    </section>
  );
}

export default Login
