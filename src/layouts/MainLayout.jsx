import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const alonePage = location.pathname.includes('/log-in') || location.pathname.includes('/sign-up');

    return (
        <div>
            {alonePage || <Navbar />}
            <Outlet />
            {alonePage || <Footer />}
        </div>
    );
};

export default MainLayout;