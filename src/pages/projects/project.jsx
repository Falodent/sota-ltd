import React from "react";
import "./project.css";
import Nav from "../../utils/navbar/navbar";
import Footer from "../../utils/footer/footer";
import Partners from "../../utils/partners/partners";
import Contact from "../../components/home/contact";
import Proj from "../../components/projects/proj";
import Portfolio from "../../components/projects/portfolio";
import Gallery from "../../components/projects/gallery";

const Project = () => {
  return (
    <>
      <Nav active={4} />
      <Proj />
      <Portfolio />
      <Gallery />
      <Partners />
      <Contact />
      <Footer active={4}/>
    </>
  );
};

export default Project;
