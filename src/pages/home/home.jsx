import React, { useEffect, useState } from "react";
import "./home.css";
import Nav from "../../utils/navbar/navbar";
import Hero from "../../components/home/hero";
import Services from "../../components/home/services";
import Profile from "../../components/home/profile";
import Projects from "../../components/home/projects";
import Partners from "../../utils/partners/partners";
import Contact from "../../components/home/contact";
import Footer from "../../utils/footer/footer";
import Loader from "../../utils/loader/loader";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  const pre = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 2500);
  };

  useEffect(() => {
    pre();
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Nav active={1} />
          <Hero />
          <Services />
          <Profile />
          <Projects />
          <Partners />
          <Contact />
          <Footer active={1} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
