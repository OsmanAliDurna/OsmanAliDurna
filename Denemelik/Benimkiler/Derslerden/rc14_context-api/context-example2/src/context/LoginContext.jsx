import { useContext } from "react";
import { createContext, useState } from "react";

//? 1. Login bilgilerini sakalyacak bir context olustur.
const LoginContext = createContext();

//? 2. Sarmalama
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
