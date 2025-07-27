import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex relative">
      
        <div className="max-lg:hidden">
          <Sidebar />
        </div>

       
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black opacity-50">
            <div className="w-64 h-full bg-white shadow-lg z-50">
              <Sidebar closeSidebar={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        <div className="flex-1 min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
