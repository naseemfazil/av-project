import React from 'react';
import '../styles/_sideBar.scss';
// import socialHub from '../assests/Sliders/Social Hub.svg'


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div>
                    credentech
                </div>
                <div className='sidebar-toggle'>
                    icon
                </div>
            </div>
            <div className='side-container'>
                <ul>
                    <li> Home</li>
                    <li>Social Hub</li>
                    <li>Project oversight</li>
                    <li>Survey Hub</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;