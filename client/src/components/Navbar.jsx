import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import TopHeader from "./tables/TopHeader";

const Navbar = ({ toggleSidebar }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      <div className="flex items-center gap-5">
        <button
          className="block lg:hidden text-black"
          onClick={toggleSidebar}
        >
          <HiOutlineMenu className="text-2xl" />
        </button>

        <div className="flex gap-2 items-center">
          <img
            src="/logo/logo.jpg"
            alt="EPCPS Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              EPCPS
            </h1>
            <p className="text-xs text-gray-400">Infinity and Beyond</p>
          </div>
        </div>
      </div>

      {pathname === "/events" && (
        <div className="ml-auto">
          <TopHeader event="Add new Events" />
        </div>
      )}
    </div>
  );
};


export default Navbar;
