import React from "react";
import Navigation from "../components/Navigation";
import "../styles/pages/_home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeData">
        <div className="Data">
          <h1>Sofiane Bassaler</h1>
          <h2>Développeur en formation à Epitech Paris</h2>
          <div className="pdf">
            <a href="./media/CV_Sofiane_BASSALER.pdf" target=" blank">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
