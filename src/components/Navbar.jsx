import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content w-full">
      <div className="align-element flex justify-center gap-3 sm:justify-end">
      <Link to={"/login"}>Sig in / Guest</Link>
      <Link to={"/register"}>Creat Account</Link>
      </div>
    </header>
  );
}

export default Navbar
