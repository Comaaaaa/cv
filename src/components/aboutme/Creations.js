import React from "react";

const Creations = () => {
  return (
    <div>
      <div className="creations">
        <p>
            Voici quelques unes de mes créations, visuelles, 
            vous pouvez trouver ici des logos d'entreprises ainsi que des NFTs
            représentant différents personnages.
        </p>
        <div className="creations-container">
          <div className="firstCreation">
            <img src="./media/creation1.jpg" alt="creation-1" />
          </div>
          <div className="secCreation">
            <img src="./media/mugen.jpg" alt="creation-2" />
          </div>
          <div className="thirdCreation">
            <img src="./media/TasteTrip.png" alt="creation-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creations;
