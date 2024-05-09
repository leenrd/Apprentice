import { createContext, useState } from "react";
import PropTypes from "prop-types";
import AccountType from "@/utils/authRoleConstant";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState({
    authenticated: true,
    accountType: AccountType.Admin,
  });

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
