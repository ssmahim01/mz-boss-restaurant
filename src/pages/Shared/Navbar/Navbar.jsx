import { NavLink } from "react-router-dom";
import cartImg from "../../../assets/icon/cart.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Logged Out Successful",
          confirmButtonText: "Okay",
          showClass: {
            popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `,
          },
          hideClass: {
            popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const options = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/our-menu">Our Menu</NavLink>
      <NavLink to="/order/salad">Order Food</NavLink>
      {/* <NavLink to="/secret">Secret</NavLink> */}

      <NavLink to="/">
        <button className="btn btn-ghost *:text-white">
          <FaShoppingCart className="text-lg" />
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </NavLink>

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-ghost uppercase font-bold"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <NavLink to="/log-in">Log-In</NavLink>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black/40 md:px-16 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden border border-teal-200 text-teal-400"
            >
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
              className="menu menu-sm dropdown-content bg-black/60 bg-opacity-80 text-white rounded-lg z-[10] mt-4 w-80 mx-auto uppercase *:font-bold p-2 shadow-sm"
            >
              {options}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl text-lg text-white font-bold">
            MZ Boss
          </a>
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
