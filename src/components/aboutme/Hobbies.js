import React from 'react';
import SportsMmaRoundedIcon from '@mui/icons-material/SportsMmaRounded';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                <i className="fas fa-futbol"></i>
                <span> Football</span>
                </li>
                <li className="hobby">
                <i className="fas fa-dumbbell"></i>
                <span> Musculation</span>
                </li>
                <li className="Randonnées">
                <i className="fas fa-hiking"></i>
                <span> Randonnées</span>
                </li>
                <li className="hobby">
                <i className="fab fa-bitcoin"></i>
                <span> Cryptomonnaies</span>
                </li>
                <li className="hobby">
                <i className="fas fa-video"></i>
                <span> Audiovisuel</span>
                </li>
                <li className="hobby">
                <SportsMmaRoundedIcon/>
                <span> Sports de combats</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;