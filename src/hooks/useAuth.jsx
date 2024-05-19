import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import queryProvider from "@/utils/queryProvider";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState({
    authenticated: false,
    user_id: null,
    role: null,
    username: null,
  });

  const login = (auth_token) => {
    const decoded = jwtDecode(auth_token);
    queryProvider.setQueryData("accessToken", auth_token);
    setUserAuth({
      authenticated: true,
      user_id: decoded.user.id,
      role: decoded.user.role,
      username: decoded.user.username,
    });
  };

  const logout = () => {
    queryProvider.invalidateQueries();
    setUserAuth({
      authenticated: false,
      user_id: null,
      role: null,
      username: null,
    });
  };

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
