import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  night: "night",
};

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || themes.winter,
  );

  const handleToggle = () => {
    const newTheme = theme === themes.winter ? themes.night : themes.winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-300">
      <div className="navbar align-element">
        {/* TITLE */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-2xl items-center"
          >
            C
          </NavLink>
        {/* DROPDOWN */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <TbMenu3 className="w-6 h-6" />
          </label>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <NavLinks />
          </ul>
        </div>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === themes.night}
            />
            <BsSunFill className="swap-on w-4 h-4" />
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>

          <NavLink className="btn btn-ghost btn-circle btn-md ml-4" to="/cart">
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
