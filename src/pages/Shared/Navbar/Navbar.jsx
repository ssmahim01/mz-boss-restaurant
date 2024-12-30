import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const options = <>
      <NavLink to="/">Home</NavLink>
          <NavLink to="/our-menu">Our Menu</NavLink>
          <NavLink to="/order/salad">Order Food</NavLink>
    </>

  return (
    <>
    <div className="navbar fixed z-10 bg-opacity-30 bg-black/40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 *:font-bold p-2 shadow-sm"
          >
          {options}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white font-bold">MZ Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1 font-bold *:ml-4">
         {options}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary">Button</a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
