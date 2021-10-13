import React from 'react';



function Project() {

let application = [
    'Timed - Quiz',
    'Horiseon - Code Retraction',
    'Day - Planner',
    'Weather - Forecaster',
    'Password - Generator',
    'Project 1 - Life Organizer',
    'Pro-ReadMe Generator',
    'Write Some Notes',
    'Employee_Profile',
    'Ecommerce-Infrastructure',
    'Project 2 - playlistify',
    'ReadMe-Generator',
    'Employee_Tracker',
]

let description = [

]

const RenderNames = () => {
    
  
        return (<div>
            {
                application.map ( (n) => {
                    return this.application(n)
                })
    
            }
        </div>);
    }   


    

    return (
      
        <div class = "project-container" >
        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Timed-Quiz">
                <h2>'Timed - Quiz' </h2>
                <h3> 'Come test your knowledge of coding with this simple application' </h3> 
            </a> 
        </div>
        {/* {
//     application_name: 'Horiseon - Code Retraction',
//     link: 'https://jmagic-learner.github.io/Code-Refractor---UWBootCamp/',
//     description: ' An coding exercise that is demonstrates coding standards'
// }, */}
        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Code-Refractor---UWBootCamp">
                <h2> Horiseon - Code Retraction </h2>
                <h3> An coding exercise that is demonstrates coding standards </h3> 
            </a>  
        </div>

    {/* application_name: 'Day - Planner',
    link: 'https://jmagic-learner.github.io/Day-Planner',
    description: 'Demonstrates front end usage of third party api.' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Day-Planner">
                <h2> Day - Planner </h2>
                <h3> Demonstrates front end usage of third party api. </h3> 
            </a>  
        </div>

    {/* application_name: 'Weather - Forecaster',
    link: 'https://jmagic-learner.github.io/Weather_App/',
    description: 'Using OpenWeather API, I feed forecast data into a front-end UI. This front end UI also allows user interactivity for API searching' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Weather_App/">
                <h2> Weather - Forecaster </h2>
                <h3> Using OpenWeather API, I feed forecast data into a front-end UI. This front end UI also allows user interactivity for API searching </h3> 
            </a>  
        </div> 
 
   {/* application_name: 'Password - Generator',
   link: 'https://jmagic-learner.github.io/Password-Generator/',
  description: 'Using for and while loops, we use user input/constraints to autogenerate passwords' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Password-Generator/">
                <h2> Password - Generator </h2>
                <h3> Using for and while loops, we use user input/constraints to autogenerate passwords </h3> 
            </a>  
        </div>


{/* application_name: 'Project 1 - Life Organizer',
 link: 'https://mohamedmesahel.github.io/Calendar/main.html/',
  description: 'A coding project that utilizes third party API, a CSS bundle, and other front end utilities' */}

        <div className="horizontal-card">
            <a href="https://mohamedmesahel.github.io/Calendar/main.html/">
                <h2> Project 1 - Life Organizer </h2>
                <h3> A coding project that utilizes third party API, a CSS bundle, and other front end utilities' </h3> 
            </a>  
        </div>

{/* application_name: 'Pro-ReadMe Generator',
link: 'https://jmagic-learner.github.io/ProReadMe-Gen',
description: 'Auto generate a readme file through usage of NPM Inquirer' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/ProReadMe-Gen">
                <h2> Pro-ReadMe Generator </h2>
                <h3> Auto generate a readme file through usage of NPM Inquirer </h3> 
            </a>  
        </div>

{/* 
 application_name: 'Write Some Notes',
link: 'https://jmagic-learner.github.io/Write_Some_Notes/',
 description: 'As a business owner, you want to be able to take down some notes for your everyday processes.' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Write_Some_Notes/">
                <h2> Write Some Notes </h2>
                <h3> As a business owner, you want to be able to take down some notes for your everyday processes </h3> 
            </a>  
        </div>


{/* application_name: 'Employee_Profile',
link: 'https://jmagic-learner.github.io/Employee_Profile/',
description: 'Work through a front end ui that displays the relationships of a team' */}

        <div className="Employee_Profile">
            <a href="https://jmagic-learner.github.io/Employee_Profile/">
                <h2> Employee_Profile </h2>
                <h3> Work through a front end ui that displays the relationships of a team </h3> 
            </a>  
        </div> 

        {/* application_name: 'Ecommerce-Infrastructure',
   link: 'https://jmagic-learner.github.io/ECommerce-Infrastructure/',
   description: 'Given a pre-existing file structure of a backend server, I connected the dots to popupate front end UI with data' */}

        <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/ECommerce-Infrastructure/">
                <h2> Ecommerce-Infrastructure </h2>
                <h3> Given a pre-existing file structure of a backend server, I connected the dots to popupate front end UI with data </h3> 
            </a>  
        </div>  

        {/* application_name: 'Project 2 - playlistify',
   link: "https://playlistify-pod3.herokuapp.com/",
   description: 'An application where you can add / search/ find songs/albums etc through the spotify API' */}

        <div className="horizontal-card">
            <a href="https://playlistify-pod3.herokuapp.com/">
                <h2> Project 2 - playlistify </h2>
                <h3> An application where you can add / search/ find songs/albums etc through the spotify API </h3> 
            </a>  
        </div> 

        {/* application_name: 'ReadMe-Generator',
   link: "https://github.com/JMagic-Learner/ProReadMe-Gen.git",
   description: 'Generate a readme by following inquirer prompts' */}

          <div className="horizontal-card">
            <a href="https://github.com/JMagic-Learner/ProReadMe-Gen.git">
                <h2> Read-Me Generator </h2>
                <h3> Generate a readme by following inquirer prompts </h3> 
            </a>  
        </div>  

        {/* application_name: 'Employee_Tracker',
   link: "https://jmagic-learner.github.io/Employee_Tracker/",
   description: 'Browse the SCP foundation database of employees' */}

          <div className="horizontal-card">
            <a href="https://jmagic-learner.github.io/Employee_Tracker/">
                <h2> Employee_Tracker </h2>
                <h3> Browse the SCP foundation database of employees </h3> 
            </a>  
        </div> 

        <div className="horizontal-card">
            <a href="https://github.com/JMagic-Learner/Regex-Made-Easy">
                <h2> Regex Made Easy </h2>
                <h3> An tutorial that explains REGEX expressions </h3> 
            </a>  
        </div>   

         <div className="horizontal-card">
            <a href="https://tranquil-harbor-49024.herokuapp.com/">
                <h2> Workout Tracker </h2>
                <h3> An application that tracks your fitness workout regimen </h3> 
            </a>  
        </div>  

         <div className="horizontal-card">
            <a href="https://github.com/JMagic-Learner/Budget-Tracker/tree/main/public">
                <h2> Budget Employee Tracker </h2>
                <h3> An application that tracks your fitness workout regimen </h3> 
            </a>  
        </div>  

          <div className="horizontal-card">
            <a href="https://github.com/JMagic-Learner/Budget-Tracker/tree/main/public">
                <h2> Dynamic Portfolio </h2>
                <h3> The REACT version of the Professional portfolio </h3> 
            </a>  
        </div>             
        </div>     
    );
}

export default Project;





