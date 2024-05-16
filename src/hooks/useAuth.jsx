import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

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
    auth_token: null,
  });

  const login = (auth_token) => {
    const decoded = jwtDecode(auth_token);
    sessionStorage.setItem("auth_token", auth_token);
    setUserAuth({
      authenticated: true,
      user_id: decoded.user.id,
      role: decoded.user.role,
      username: decoded.user.username,
      auth_token,
    });
  };

  const logout = () => {
    sessionStorage.removeItem("auth_token");
    setUserAuth({
      authenticated: false,
      user_id: null,
      role: null,
      username: null,
      auth_token: null,
    });
  };

  useEffect(() => {
    console.log(userAuth);
  }, [userAuth]);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
