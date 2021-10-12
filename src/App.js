import React , { useState } from 'react';
import ScriptTag from 'react-script-tag';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Project from './components/Project';
import Profile from './components/Profile';
import Intro from './components/Intro';
import Contact from './components/Contact';

import './styles/portfolio_styling.css';



function App() {

const Demo = props => (
<ScriptTag type="text/javascript" src="./scripts/slideshow.js"/>
 )

 const [currentURL, setcurrentURL] = useState('Intro');

 const componentArray = () => {
     if (currentURL === 'Intro') {
         return <Intro/>;
     } 
     if (currentURL === 'Project') {
         return <Project />;
     }
     if (currentURL === 'Profile') {
         return <Profile />;
     }
     if (currentURL === 'Contact') {
        return <Contact />;
    }
     return <Intro />;  
 }

 const handleURLChange = (page) => setcurrentURL(page);

    return (
   <div>
   <Navigation currentURL={currentURL} handleURLChange={handleURLChange} />
   <Banner />
   {componentArray()}
   <Footer />
   <ScriptTag type="text/javascript" src="./scripts/slideshow.js"/>
   <ScriptTag type="text/javascript" src="./scripts/slideshow2.js"/>


    </div>
    );
}

export default App;