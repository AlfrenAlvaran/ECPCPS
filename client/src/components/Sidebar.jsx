import { menu } from "@/constants/menu";
import React from "react";

const Sidebar = ({ active }) => {
  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky left-0 top-[61px] z-30">
      {menu.map((item, i) => {
        return (
          <button
            className={`w-full flex items-center gap-4 text-[15px] ${
              active === item.name
                ? " bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 hover:brightness-110 transition"
                : ""
            } py-3 px-6 rounded-lg mb-3`}
            key={`menu_${i}`}
          >
            <item.icon className="text-xl" />
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
