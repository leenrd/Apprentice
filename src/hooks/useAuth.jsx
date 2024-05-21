import { createContext, useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn");
    if (logged) {
      const accessToken = JSON.parse(logged);
      login(accessToken);
    }
  }, []);

  const login = (accessToken) => {
    const decoded = jwtDecode(accessToken);
    localStorage.setItem("isLoggedIn", JSON.stringify(accessToken));
    queryProvider.setQueryData("accessToken", accessToken);
    setUserAuth({
      authenticated: true,
      user_id: decoded.user.id,
      role: decoded.user.role,
      username: decoded.user.username,
    });
  };

  const logout = () => {
    queryProvider.invalidateQueries();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isBannerClosed");
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
