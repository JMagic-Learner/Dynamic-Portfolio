import React , { useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Project from './components/Project';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {

const [project, projectCheck] = useState(false);

    return (
    <div>
    <Navigation/>
    <Banner/>
    <Intro />
    <Project project={project} projectCheck={projectCheck}/>
    <Navigation/>
    <Footer />
  
    </div>
    );
}

export default App;