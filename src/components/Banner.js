import React from 'react';
import topPic from '../images/JasonMaBanner.jpg';
import "../styles/portfolio_styling.css";

function Banner() {

    return (
        <div>
    <div className="slideshow-gimmick">
            <div className="main-image">
        <img src={topPic} id="slideshow-display" alt="An image of an totally unassuming dude."/>
            </div>
        <a className="prev" id="prevButton">&#10094;</a>
        <a className="next" id="nextButton">&#10095;</a>
    </div>

   
    <script type="text/javascript" src="../scripts/slideshow.js"></script>
    
    </div>
    );
}

export default Banner;