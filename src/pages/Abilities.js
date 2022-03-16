import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/Abilities/Languages";
import Experience from "../components/Abilities/Experience";
import SideSkills from "../components/Abilities/SideSkills";
import PortfolioAccess from "../components/Abilities/Portfoliobutton";
import "../styles/pages/_abilities.scss";

const Abilities = () => {
  return (
    <div className="Abilities">
      <div className="AbilitiesData">
        <Languages />
        <Experience />
        <SideSkills />
        <PortfolioAccess />
      </div>
    </div>
  );
};

export default Abilities;
