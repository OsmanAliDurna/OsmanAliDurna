import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
