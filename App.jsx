import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/homePages";
import ProjectDetails from "./pages/projectDetails";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
