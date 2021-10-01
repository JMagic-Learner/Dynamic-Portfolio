import React from 'react';
import '../styles/portfolio_styling.css';



const styles = {
 navigation: {
    color: 'white',
    align: 'center',
    fontSize: 2.5
 },

}

function Navigation({ project, projectCheck}) {

    return (
        <nav>
        <div className="introduction-banner">
                <h1> Portfolio </h1>
                <section class="navigation-menu">
                    <ul>
                        <li className="navigation-button" ><a href="/"> Home </a></li>
                        <li className="navigation-button" onClick={() => projectCheck(!project)}><a href="/projects"> Projects </a></li>
                        <li className="navigation-button" ><a href="/profile"> Resume </a></li>
                        <li className="navigation-button" ><a href="https://www.linkedin.com/in/jason-ma-970417113/">LinkedIn </a></li>
                        <li className="navigation-button" ><a href="https://github.com/JMagic-Learner">Github </a></li>
                        <li className="navigation-button" ><a href="#contact-section"> Contact </a></li>
                    </ul>
                </section>
            </div>
        </nav>
    );
}

export default Navigation;
