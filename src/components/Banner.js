import React from 'react';
import topPic from '../images/JasonMaBanner.jpg'
import '../styles/portfolio_styling.css';

function Banner() {
    return (
    <div className='main-image'>
    <img src={topPic} alt="Logo" />
    </div>
    );
}

export default Banner;