import React, { useEffect, useState } from "react";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState(3);
  const menuItems = [
    { title: "Steve O. Olaniyi", role: "Chief Executive Officer" },
    { title: "Victor Olaniyi", role: "Director" },
    { title: "Engr. Jerome Adeyemi", role: "General Manager" },
    { title: "Anwana Mfon", role: "HSE Coordinator" },
    { title: "Victor Ndenwa", role: "Project Engineer" },
    { title: "Stephen Alawon", role: "Project Coordinator" },
    { title: "Sunday Amoko", role: "Foreman" },
    { title: "Osekafor Adebija", role: "Supervisor" },
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
        <p className="title headFont trans">Our Team</p>
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
            <div className="slide-item team-card" key={index}>
              <h3 className="headFont team-name">{item.title}</h3>
              <p className="team-role">{item.role}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;
