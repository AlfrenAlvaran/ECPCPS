import { Toaster } from "sonner";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import EventsPage from "./pages/EventsPage";
import ReportPage from "./pages/ReportPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
