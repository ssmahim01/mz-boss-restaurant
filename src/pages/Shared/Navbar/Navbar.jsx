import { NavLink } from "react-router-dom";
import cartImg from "../../../assets/icon/cart.png";
import "./Navbar.css";

const Navbar = () => {
    const options = <>
      <NavLink to="/">Home</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/our-menu">Our Menu</NavLink>
          <NavLink className="flex items-center" to="/order/salad">
          Order Food
          <img className="w-12 h-10" src={cartImg} alt="Cart Icon" />
          </NavLink>
          <NavLink to="/log-in">Log-In</NavLink>
    </>

  return (
    <>
    <div className="navbar fixed z-10 bg-opacity-30 bg-black/40 md:px-16 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border border-teal-200 text-teal-400">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-56 uppercase *:font-bold p-2 shadow-sm"
          >
          {options}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-2xl text-lg text-white font-bold">MZ Boss</a>
      </div>
      <div className="navbar-end hidden lg:flex text-white">
        <ul className="menu menu-horizontal items-center px-1 uppercase font-bold *:ml-3">
         {options}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
