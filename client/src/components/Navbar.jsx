import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
const Navbar = ({ active }) => {
  const [menuOpen, setOpen] = useState(false);
  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] !py-4 px-7 sticky top-0 z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpen(active)}
      >
        {!menuOpen ? (
          <HiOutlineMenu className="text-2xl" />
        ) : (
          <HiOutlineX className="text-2xl" />
        )}
      </button>
      <div className="flex gap-2">
        <img
          src="/logo/logo.jpg"
          alt="EPCPS Logo"
          className="w-10 h-10 mb-3 rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-800 tracking-wide">
            EPCPS
          </h1>
          <p className="text-xs text-gray-400">Infinity and Beyond</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
