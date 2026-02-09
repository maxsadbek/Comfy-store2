import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(false)

  const handleToggle = () =>{
    setTheme(!theme)
  }

  return (
    <nav className="bg-base-300">
      <div className="navbar align-element">
        {/* TITLE */}
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className={"hidden lg:flex btn btn-primary text-2xl items-center"}
          >
            C
          </NavLink>
        </div>
        {/* dropdown */}
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* Theme */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleToggle} />
            <BsSunFill className="swap swap-on w-4 h-4" />
            <BsMoonFill className="swap swap-off w-4 h-4" />
          </label>
          <NavLink
            className="btn btn-ghost btn-circle btn-md ml-4"
            to={"/cart"}
          >
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
