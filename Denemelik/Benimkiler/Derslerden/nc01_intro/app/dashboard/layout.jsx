import Sidebar from "@/components/Sidebar";
import React from "react";
import Team from "./team/page";
import Users from "./users/page";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Team />
      <Users />

      {children}
    </div>
  );
};

export default DashboardLayout;
