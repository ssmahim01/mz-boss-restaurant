import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();

  const location = useLocation();

  if (loading || isPending) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/log-in" replace />;
};

export default AdminRoute;
