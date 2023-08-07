import React from "react";
import Img from "../../assets/abtherobg.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="prof-cont">
        <p className="prof-title headFont">Company Profile</p>
        <p className="prof-body">
          SOTA INVESTMENT LIMITED is an indigenous limited liability company
          incorporated in Nigeria in 1999 with a 100% equity holding. SOTA is
          highly reputed for efficiency and effectiveness in project execution
          and management resulting in the delivery of quality services to all
          our clients.
        </p>
        <p className="prof-body">
          SOTA INVESTMENT LIMITED in partnership with other notable Oil And Gas
          servicing companies have been able to execute challenging projects
          successfully and timely over the years. Our partnership has also
          provided a network of seasoned professional team from different areas
          of human endeavor manning different areas of our operations. With this
          crop of professionals, we are able to execute any major and
          challenging engineering projects including design, mechanical,
          structural, civil, fabrication, construction and maintenance works. We
          also have capability to carry out other general work services
          including transportation, logistics and manpower supplies.
        </p>
        <p className="prof-body">
          The management of SOTA INVESTMENT LIMITED ensures that it's
          involvement in HSSE issues is made visible to the workforce by its
          participation in HSSE activities, objective setting and monitoring. We
          also ensure to reward adherence to HSSE standards in order to
          encourage maximum compliance.
        </p>
      </div>
      <img src={Img} alt="" />
    </div>
  );
};

export default Profile;
