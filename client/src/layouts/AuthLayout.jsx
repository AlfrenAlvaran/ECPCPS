import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5  md:gap-8">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
