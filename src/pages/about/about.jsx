import React from "react";
import Nav from "../../utils/navbar/navbar";
import Footer from "../../utils/footer/footer";
import Partners from "../../utils/partners/partners";
import Contact from "../../components/home/contact";
import Abouthero from "../../components/about/abouthero";
import "./about.css";
import Mission from "../../components/about/mission";
import Values from "../../components/about/values";
import Team from "../../components/about/team";

const About = () => {
  return (
    <>
      <Nav active={2} />
      <Abouthero />
      <Mission />
      <Values />
      {/* <Team /> */}
      <Partners />
      <Contact />
      <Footer active={2}/>
    </>
  );
};

export default About;
