import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ active }) => {
  return (
    <>
      <Navbar active={active} />

      <div className="flex">
        <div className="max-[1080px]:hidden">
          <Sidebar active={active} />
        </div>
        <div className="grow mx-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
