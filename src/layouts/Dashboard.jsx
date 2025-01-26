import { Helmet } from "react-helmet-async";
import {
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { TbLogout2 } from "react-icons/tb";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout successful",
      showConfirmButton: false,
      timer: 3000,
    });

    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Helmet>
        <title>MZ Boss | Dashboard</title>
      </Helmet>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 z-40 min-h-screen w-64 bg-lime-200 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-72 lg:min-h-screen`}
      >
        <div className="p-4">
          <h2 className="ml-5 text-3xl uppercase font-extrabold mb-4">
            MZ Boss <br />{" "}
            <span className="leading-6 text-lg font-semibold">Restaurant</span>
          </h2>
        </div>

        <ul className="menu *:font-bold flex flex-col space-y-7 p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/add-items">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaList /> Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>

              <div className="divider"></div>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">
                  <FaHome /> User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaList /> Payment History
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>

              <div className="divider"></div>
            </>
          )}
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/our-menu">
              <MdMenuBook />
              Menu
            </NavLink>
          </li>

          <button
            onClick={handleLogout}
            className="text-white text-lg w-full btn btn-error border-none flex gap-2 items-center rounded-md"
          >
            <TbLogout2 className="text-xl font-bold" /> Log Out
          </button>
        </ul>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 bg-violet-300 p-2 rounded-md shadow-lg"
      >
        <MdMenuBook className="text-2xl" />
      </button>

      {/* Content */}
      <div
        className="min-h-screen md:p-8 p-4 flex-1 bg-slate-100"
        onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
