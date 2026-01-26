import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Packages from "../pages/Packages";
import Process from "../pages/Process";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/pricing" element={<Navigate to="/packages" replace />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
