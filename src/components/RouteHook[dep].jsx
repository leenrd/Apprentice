import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const RouteHook = ({ forwardElement }) => {
  const { userAuth } = useAuth();
  return userAuth.authenticated ? forwardElement : <Navigate to="/auth" />;
};

RouteHook.propTypes = {
  forwardElement: PropTypes.node.isRequired,
};

export default RouteHook;
