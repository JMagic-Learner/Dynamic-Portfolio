import React from 'react';
import '../styles/portfolio_styling.css';

const styles = {
    navigation: {
       color: 'white',
       align: 'center',
       fontSize: 2.5
    },
    header: {
        margin: 50
    }
   
   }

function Header() {
    return (
 <div className="horizontal-content" style={styles.header}>
            <p> Welcome to the Portfolio - SERVERSIDE Edition </p> 
            <ul>
                <li> 8/30/2021 - Succesfully deployed the live server rendition
                    of Professional Portfolio. This application utilizes Node Js, Express, Sequelize,
                    MySql, JAWSDB , Handlebars, Heroku and other dependencies.

                </li>
                <li> 
                    Future renditions would include a video catalogue of application walkthroughs, better UI.
                </li>
                <li>  
                    Need to study CSS animations to "fade" away the slideshow"
                </li>
            </ul>      
</div>
    );
}

export default Header;