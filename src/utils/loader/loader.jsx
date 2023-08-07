import React from "react";
import Logo from "../../assets/sota.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="animation">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
