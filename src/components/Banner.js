import React from 'react';
import topPic from '../images/JasonMaBanner.jpg';
import "../styles/portfolio_styling.css";
import "../styles/slideshow.css";

function Banner() {

    return (
        <div>
    <div className="slideshow-gimmick">
           
        <a className="prev" id="prevButton">&#10094;</a>
        <a className="next" id="nextButton">&#10095;</a>
    </div>

    <div className="main-image">
        <img src={topPic} id="slideshow-display" alt="An image of an totally unassuming dude."/>
            </div>
    <script type="text/javascript" src="../scripts/slideshow.js"></script>
    <script type="text/javascript" src="../scripts/slideshow2.js"></script>
    
    
    </div>
    );
}

export default Banner;