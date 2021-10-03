import React from 'react';
import '../styles/portfolio_styling.css';



const styles = {
 navigation: {
    color: 'white',
    align: 'center',
    fontSize: 2.5
 },

}

function Navigation({currentURL , handleURLChange}) {

    return (
        <nav>
        <div className="introduction-banner">
                <h1> Portfolio </h1>
                <div className="navigation-menu">
                    <ul>
                        <li className="navigation-button" >
                            <a 
                            href="#intro" 
                            onClick={() => handleURLChange('Intro')} 
                            className={currentURL ==='Intro' ?'nav-link active' : 'nav-link'}
                        > Home 
                        </a>
                        </li>
                        <li className="navigation-button" >
                            <a 
                            href="#project"
                            onClick={() => handleURLChange('Project')} 
                            className={currentURL ==='Project' ?'nav-link active' : 'nav-link'}
                            > Project 
                        </a>
                        </li>
                        <li className="navigation-button" >
                            <a 
                            href="#profile"
                            onClick={() => handleURLChange('Profile')}
                            className={currentURL ==='Profile' ?'nav-link active' : 'nav-link'}
                             > Profile 
                        </a>
                        </li>
                        <li className="navigation-button" ><a href="https://www.linkedin.com/in/jason-ma-970417113/">LinkedIn </a></li>
                        <li className="navigation-button" ><a href="https://github.com/JMagic-Learner">Github </a></li>
                        <li className="navigation-button" >
                            <a 
                            href="#contact"
                            onClick={() => handleURLChange('Contact')}
                            className={currentURL ==='Contact' ?'nav-link active' : 'nav-link'}
                            > Contact 
                            </a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
