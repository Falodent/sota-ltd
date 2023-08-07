import React from "react";

const Mission = () => {
  return (
    <div className="mission">
      <p className="mis-head title headFont">
        Our mission and vision statement
      </p>
      <div className="mis-grid">
        <div className="mis-card">
          <p className="mis-title headFont">Vision</p>
          <p className="mis-sub">
            To be a major servicing company reputed for efficient, cost
            effective, as well as environmental friendly solution in energy, oil
            and gas industry.
          </p>
        </div>
        <div className="mis-card">
          <p className="mis-title headFont">Mission</p>
          <p className="mis-sub">
            To execute projects at competitive price, provide safe working
            conditions and deliver high quality work within reasonable time
            frame.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
