import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "@/hooks/useAuth";

const RouteHook = ({ children, allowedRoles }) => {
  const location = useLocation();
  const { userAuth } = useAuth();

  if (!userAuth.authenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userAuth.role)) {
    return <Navigate to="/not-authorized" state={{ from: location }} replace />;
  }

  return children;
};

RouteHook.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default RouteHook;
