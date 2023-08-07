import React from "react";
import Img1 from "../../assets/safety.svg";
import Img2 from "../../assets/integrity.svg";
import Img3 from "../../assets/quality.svg";
import Img4 from "../../assets/satisfaction.svg";

const Values = () => {
  return (
    <div className="services val">
      <p className="title headFont">Our Core Values</p>
      <div className="value-grid">
        <div className="value-card val1">
          <img src={Img1} alt="" />
          <p className="prof-title headFont">Safety</p>
          <p className="val-body">
            We work hard to ensure that safety is the key mind-set established
            before every operation.
          </p>
        </div>

        <div className="value-card val2">
          <img src={Img2} alt="" />
          <p className="prof-title headFont">Integrity</p>
          <p className="val-body">
            We treat our stakeholders with respect, honesty sincerity morality
            and openness with the belief that transparency is key to
            establishing best working relationships.
          </p>
        </div>

        <div className="value-card val3">
          <img src={Img3} alt="" />
          <p className="prof-title headFont">Quality</p>
          <p className="val-body">
            Our operations are in accordance with international standards
            meeting or exceeding their expectations.
          </p>
        </div>

        <div className="value-card card-end val4">
          <img src={Img4} alt="" />
          <p className="prof-title headFont">Satisfaction</p>
          <p className="val-body">
            We sit on the same side with our clients with the utmost goal of
            seeking solutions to challenging issues irrespective of
            profitability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
