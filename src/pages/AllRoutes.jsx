import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Results } from "./Results";
import { Quiz } from "./Quiz";
import { Dashboard } from "./Dashboard";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
