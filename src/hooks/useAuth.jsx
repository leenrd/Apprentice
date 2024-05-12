import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import AccountType from "@/utils/authRoleConstant";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState({
    authenticated: false,
    accountType: AccountType.Admin,
    auth_token: null,
  });

  const login = (authData) => {
    setUserAuth({
      authenticated: true,
      accountType: authData.accountType,
      auth_token: authData.auth_token,
    });
  };

  const logout = () => {
    setUserAuth({
      ...userAuth,
      authenticated: false,
      auth_token: null,
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
