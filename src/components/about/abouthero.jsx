import React from "react";
import Img from "../../assets/abtherobg.svg";

const Abouthero = () => {
  return (
    <div className="abt-hero">
      <div className="abt-content">
        <p className="title headFont">
          About <span>Sota</span>
        </p>
        <p className="prof-body">
          <span>SOTA INVESTMENT LIMITED</span> is an indigenous limited
          liability company incorporated in Nigeria in 1999 with a 100% equity
          holding. <span>SOTA</span> is highly reputed for efficiency and
          effectiveness in project execution and management resulting in the
          delivery of quality services to all our clients.
        </p>
        <ul className="prof-body">
          Our project management and execution philosophy are:
          <li>
            create detail schedule and resource plan to meet client's project
            objective.
          </li>
          <li>communicate clearly with all project stakeholders.</li>
          <li>track project progress and fine-tune deviations.</li>
          <li>supervise closely on quality of work done.</li>
          <li>complete and commission the project safely and timely.</li>
        </ul>
      </div>
      <img src={Img} alt="" className="abtheroimg" />
    </div>
  );
};

export default Abouthero;
