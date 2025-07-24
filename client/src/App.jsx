import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
