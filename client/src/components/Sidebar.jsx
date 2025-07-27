import { menu } from "@/constants/menu";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import TopHeader from "./tables/TopHeader";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky left-0 top-[61px] z-30">
      {menu.map((item, i) => {
        return (
          <NavLink
            to={item.path}
            key={`menu_${i}`}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition ${
                isActive || pathname === item.path
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white hover:brightness-110"
                  : "text-gray-800 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="text-xl" />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
