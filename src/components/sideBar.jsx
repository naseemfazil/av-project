import React from 'react';
import '../styles/_sideBar.scss';
// import socialHub from '../assests/Sliders/Social Hub.svg'
import Home from '../assests/Home.svg';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div>
                    credentech
                </div>

            </div>
            <div className='sidebar-toggle'>
                icon
            </div>
            <div className='side-container'>
                <ul>
                    <li><span><img src={Home} alt="" /></span> Home</li>
                    <li><span><img src={Home} alt="" /></span>  Social Hub</li>
                    <li><span><img src={Home} alt="" /></span>  Project oversight</li>
                    <li><span><img src={Home} alt="" /></span>  Survey Hub</li>
                </ul>
            </div>
            <div className='side-container_sub-container'>

                <ul>
                    <li><span><img src={Home} alt="" /></span> Home</li>
                    <li><span><img src={Home} alt="" /></span>  Social Hub</li>
                    <li><span><img src={Home} alt="" /></span>  Project oversight</li>
                    <li><span><img src={Home} alt="" /></span>  Survey Hub</li>
                </ul>
            </div>
            <div className='side-bottom_container'>
                <p>botiom</p>
            </div>
        </div>
    );
}

export default SideBar;