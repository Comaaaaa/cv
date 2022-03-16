import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioAccess = () => {
    return (
        <div className="button">
            <div className="portButton">
                <h3>Voir mon travail</h3>
                <NavLink exact to="/portfolio">
                    <i className="fa fa-image"></i>
                    <span> Accéder au portfolio</span>
                    </NavLink>
                </div>    
        </div>        
    );
};

export default PortfolioAccess;