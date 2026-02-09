import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom"
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
      <nav className="bg-base-300">
        <div className="navbar align-element">
          {/* TITLE */}
          <NavLink
            to={"/"}
            className={"hidden lg:flex btn btn-primary text-2xl items-center"}
          >
            C
          </NavLink>
          {/* dropdown */}
          <div className="dropdown">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <TbMenu3 className="w-6 h-6 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
            >
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
                nav link
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
