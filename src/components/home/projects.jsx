import React, { useEffect, useState } from "react";
import P1 from "../../assets/proj1.png";
import P2 from "../../assets/proj11.png";
import P3 from "../../assets/proj2.png";
import P4 from "../../assets/proj4.png";
import P5 from "../../assets/proj5.png";
import P6 from "../../assets/proj6.png";
import P7 from "../../assets/proj7.png";
import P8 from "../../assets/proj8.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState(3);
  const menuItems = [
    { title: "FLARE PIT WALKWAY", image: P1 },
    { title: "TANDEM LIFT FOR VERTICAL FLARE-STACK", image: P2 },
    { title: "YARD FABRICATION WORK IN PROGRESS", image: P3 },
    { title: "WELLHEAD PLATFORM AND WALKWAY", image: P4 },
    { title: "FLOWSTATION VIEW", image: P5 },
    { title: "HORIZONTAL FLARE SYSTEM", image: P6 },
    { title: "SIESMIC DRILL WORK IN PROGRESS", image: P7 },
    { title: "CITADEL FENCE INSTALLED", image: P8 },
  ];

  const handleNext = () => {
    if (currentIndex < menuItems.length - view) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const change = () => {
    if (window.innerWidth <= 768) {
      setView(2);
    } else {
      setView(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", change);
    window.addEventListener("DOMContentLoaded", change);

    return () => {
      window.removeEventListener("resize", change);
      window.removeEventListener("DOMContentLoaded", change);
    };
  });

  return (
    <div className="projects">
      <div className="proj-flex">
        <p className="title headFont">Projects</p>
        <div className="proj-menu">
          <button
            className={`${currentIndex === 0 ? "non" : "slide-button"}`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            {`<`}
          </button>
          <button
            className={`${
              currentIndex === menuItems.length - view ? "non" : "slide-button"
            }`}
            onClick={handleNext}
            disabled={currentIndex === menuItems.length - view}
          >
            {`>`}
          </button>
        </div>
      </div>

      <div className="slide-content">
        {menuItems
          .slice(currentIndex, currentIndex + view)
          .map((item, index) => (
            <div className="slide-item" key={index}>
              <img src={item.image} alt={item.title} />
              <h3 className="headFont">{item.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
