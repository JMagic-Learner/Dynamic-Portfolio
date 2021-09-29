import React from 'react';

function Navigation() {
    const Link1 = 'This should be a link to the main page';
    const Link2 = 'This should be a link to the project page';
    const Link3 = 'This should be a link to the contact page';


    return (
    <div>
    <ul>

        <li> {Link1} </li>
        <li> {Link2} </li>
        <li> {Link3} </li>
    </ul>
    </div>
    );
}

export default Navigation;
