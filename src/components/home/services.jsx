import React from "react";
import PipeIcon from "../../icons/pipe";
import EquipIcon from "../../icons/equipments";
import CivilIcon from "../../icons/civil";
import LogIcon from "../../icons/logistics";
import CorrIcon from "../../icons/corrosion";
import DesignIcon from "../../icons/designs";
import ElectricIcon from "../../icons/electric";
import ManIcon from "../../icons/man";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <p className="title headFont">Our Services</p>
      <p className="serv-sub">
        SOTA is highly reputed for the delivery of quality services to all our
        clients.
      </p>
      <div className="serve-grid">
        <Link to="/services" className="serve-card bg1">
          <PipeIcon />
          <p className="serve-body">
            Pipeline, Flow-Line, Structural <br />
            Fabrication and Installation,
            <br /> as well as Maintenance of Oil and Gas Facilities
          </p>
        </Link>
        <Link to="/services" className="serve-card bg3">
          <CivilIcon />
          <p className="serve-body">
            Civil Construction <br />
            Works
          </p>
        </Link>
        <Link to="/services" className="serve-card bg6">
          <DesignIcon />
          <p className="serve-body">
            Gas <br />
            Proliferation
          </p>
        </Link>
        <Link to="/services" className="serve-card bg2">
          <EquipIcon />
          <p className="serve-body">
            Heavy & Light Duty <br /> Equipment Hire, Lease & <br />
            Sales
          </p>
        </Link>
      </div>

      <div className="serve-grid">
        <Link to="/services" className="serve-card bg5">
          <CorrIcon />
          <p className="serve-body">
            Corrosion Control, <br />
            Onshore and Offshore Blast Cleaning & Painting.
          </p>
        </Link>
        <Link to="/services" className="serve-card bg4">
          <LogIcon />
          <p className="serve-body">
            Procurement <br /> & <br />
            Logistics
          </p>
        </Link>
        <Link to="/services" className="serve-card bg7">
          <ElectricIcon />
          <p className="serve-body">
            Instrumentation and <br /> Electrical Maintenance
          </p>
        </Link>
        <Link to="/services" className="serve-card bg8">
          <ManIcon />
          <p className="serve-body">
            Skilled and Unskilled <br />
            Manpower Supply
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
