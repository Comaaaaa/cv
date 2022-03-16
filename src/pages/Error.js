import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="Error">
            <div className="ErrorData">
                <h3>Malheureusement cette page n'existe pas</h3>
                <NavLink exact to="/">
                    <i className="fa fa-home"></i>
                    <span> Accueil</span>
                    </NavLink>
                </div>    
        </div>        
    );
};

export default Error;