import React from "react";
import "./services.css";
import Nav from "../../utils/navbar/navbar";
import Footer from "../../utils/footer/footer";
import Partners from "../../utils/partners/partners";
import Contact from "../../components/home/contact";
import Serve from "../../components/services/serve";
import Core from "../../components/services/core";

const Service = () => {
  return (
    <>
      <Nav active={3} />
      <Serve />
      <Core />
      <Partners />
      <Contact />
      <Footer active={3} />
    </>
  );
};

export default Service;
