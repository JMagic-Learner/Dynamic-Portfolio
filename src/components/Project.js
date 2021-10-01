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

function Project( {project, projectCheck}) {
    return (
<div>
    {/* Conditionally render the project html elements if the user has clicked projects}*/}
    {project ? (
        <div className="horizontal-card">
            <h2> Project Name </h2>
            <h2> Description </h2> 
        </div>    


    ) : (
        <div className="horizontal-content" style={styles.header}>
            <p> This is loading the projects wihtout project true</p>    
</div> 
    )}
    
</div>
    );
}

export default Project;