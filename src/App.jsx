import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./pages/about/about.css";
import "./pages/home/home.css";
import "./pages/projects/project.css";
import "./pages/services/services.css";
import "./utils/navbar/nav.css";
import "./utils/footer/footer.css";
import Scroll from "./function/scroll";
import Loader from "./utils/loader/loader";
import { Suspense } from "react";

const Home = React.lazy(() => import("./pages/home/home"));
const About = React.lazy(() => import("./pages/about/about"));
const Service = React.lazy(() => import("./pages/services/services"));
const Project = React.lazy(() => import("./pages/projects/project"));

function App() {
  return (
    <Router>
      <Scroll />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
