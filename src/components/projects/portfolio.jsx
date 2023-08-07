import React from "react";
import P1 from "../../assets/proj1.png";
import P2 from "../../assets/proj2.png";
import P3 from "../../assets/proj3.png";
import P4 from "../../assets/proj4.png";
import P5 from "../../assets/proj5.png";
import P6 from "../../assets/proj6.png";
import P7 from "../../assets/proj7.png";
import P8 from "../../assets/proj8.png";
import P9 from "../../assets/proj9.png";
import P10 from "../../assets/proj10.png";
import P11 from "../../assets/proj11.png";
import P12 from "../../assets/proj12.png";

const Portfolio = () => {
  const menuItems = [
    { title: "FLARE PIT WALKWAY", image: P1 },
    { title: "YARD FABRICATION WORK IN PROGRESS", image: P2 },
    { title: "WELLHEAD CAGE", image: P3 },
    { title: "WELLHEAD PLATFORM AND WALKWAY", image: P4 },
    { title: "FLOWSTATION VIEW", image: P5 },
    { title: "HORIZONTAL FLARE SYSTEM", image: P6 },
    { title: "SIESMIC DRILL WORK IN PROGRESS", image: P7 },
    { title: "CITADEL FENCE INSTALLED", image: P8 },
    { title: "PROCUREMENT & LOGISTICS OF MOBILE TOILET", image: P9 },
    { title: "CRUDE STORAGE BARGE", image: P10 },
    { title: "TANDEM LIFT FOR VERTICAL FLARE-STACK", image: P11 },
    { title: "VERTICAL FLARE-STACK INSTALLATION", image: P12 },
    // { title: "VERTICAL FLARE-STACK INSTALLATION", image: P13 },
  ];
  return (
    <div className="port">
      <div className="slide-content grid-4">
        {menuItems.map((item, index) => (
          <div
            className="slide-item"
            key={index}
          >
            <img src={item.image} alt={item.title} />
            <h3 className="headFont">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
