import React from 'react';
import './LandingPage.css';

import Jon from '../../images/jon.jpg';
import Dude from '../../images/dude.jpg';

const LandingPage = () => {
    return (
        <div className="landingpage-wrapper" >
            <div className="landingpage-inner-wrapper">
            {/* <h1 className="landingpage-header">Code-Book</h1> */}                
                <ul className="img-container">
                    <li>
                        <img src={Jon} alt="jon" className="jon-logo"/>
                    </li>
                    <li>
                        <img src={Dude} alt="jon" className="dude-logo"/>
                    </li>
                </ul>

            <p className="landingpage-text">Discuss Code. Engage in exchange of inovative ideas. Find the most recent best practices and never miss out on new tech.</p>
            <h2 className="landingpage-sm-header">We Welcome you to Code-Book. The wet dream of a coder.</h2>
            </div>
        </div>
    )
}

export default LandingPage
