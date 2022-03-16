import React from "react";
import Navigation from "../components/Navigation";
import Biography from "../components/aboutme/Bio";
import Hobbies from "../components/aboutme/Hobbies";
import Creations from "../components/aboutme/Creations";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-container">
        <Biography />
        <Creations />
        <Hobbies />
      </div>
    </div>
  );
};

export default Aboutme;