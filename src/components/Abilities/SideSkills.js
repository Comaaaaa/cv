import React from 'react';

const SideSkills = () => {
    return (
            <div className="sideSkills">
                <h3>Autres compétences</h3>
                <div className="list">
                    <ul>
                        <li><i className="fas fa-check-square">
                        </i> Anglais Courant</li>
                        <li><i className="fas fa-check-square">
                        </i> Espagnol Courant</li>    
                       <li><i className="fas fa-check-square">
                       </i> Github</li> 
                       <li><i className="fas fa-check-square">
                       </i> Linux</li> 
                    </ul>
                    <ul>
                        <li><i className="fas fa-check-square">
                        </i> Montage vidéo</li>
                        <li><i className="fas fa-check-square">
                        </i> Photoshop / Lightroom</li>    
                       <li><i className="fas fa-check-square">
                       </i> Illustrator</li> 
                       <li><i className="fas fa-check-square">
                       </i> Apprentissage Rapide</li> 
                    </ul>
                </div>
            </div>
    );
};

export default SideSkills;