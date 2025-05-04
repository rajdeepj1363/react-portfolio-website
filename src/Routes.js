import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Qualification/Education";
import MainContainer from "./Components/Main/MainContainer";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Resume from "./resume.pdf";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/qualifications" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route
        path="/resume"
        element={<a href={Resume} download={"resume.pdf"} />}
      />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
