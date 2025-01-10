import { Helmet } from "react-helmet-async";
import {
    FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMenuBook, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex md:flex-row flex-col">
      <Helmet>
        <title>MZ Boss | Dashboard</title>
      </Helmet>

      {/* Dashboard Side bar */}
      <div className="p-4 w-72 min-h-screen bg-orange-400">
        <h2 className="ml-5 text-3xl uppercase font-extrabold mb-8">
          MZ Boss <br />{" "}
          <span className="leading-6 text-lg font-semibold">Restaurant</span>
        </h2>
        <ul className="menu *:font-bold">
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
                <NavLink to="/dashboard/manage-bookings">
                  <FaBook /> Manage Bookings
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

              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview /> Add Review
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/bookings">
                  <FaCalendar /> My Bookings
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

          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="p-8 flex-1 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
