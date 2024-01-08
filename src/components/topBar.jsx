import React from 'react';
import '../styles/_topBar.scss';
import Flix from '../assests/Flix.svg';
import Create from '../assests/Create.svg';
import Message from '../assests/Message.svg';
import Notifications from '../assests/Notification.svg';
import People from '../assests/Group 350.png';
import  DownArrow from '../assests/Down Arrow.svg'

import Search from '../assests/Search.svg';
// import AnimationRotation from '../assests/points-rotation/animation_lmx4zxty_small.gif';
// import Lottie from 'react-lottie';
import animationData from '../assests/points-rotation/animation_lmx4zqfg.json'; // Replace with the path to your Lottie JSON file


const TopBar = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
        width: 5, // Adjust width as needed
        height: 5, // Adjust height as needed
        // rendererSettings: {
        //     preserveAspectRatio: 'xMidYMid slice'
        // }
    };

    return (
        <div className='topBar-container'>
            <div className="search-container">
                {/* <i className="search-icon fas fa-search"></i> */}
                <img src={Search} alt="" className="search-icon fas fa-search" width={20} />

                <input type="text" class="search-box" placeholder="Search..." />
            </div>
            <div>
                <button className='topBar-btn'>
                    <span>
                        {/* <span >
                            <Lottie options={defaultOptions} />
                        </span> */}
                    </span>15.8k
                    <span>Points</span>
                </button>
            </div>

            <div className='topBar-menu-container'>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        <img src={Flix} alt="" />
                    </div>
                    <p>Flikx</p>
                </div>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        <img src={Create} alt="" />
                    </div>
                    <p>Create</p>
                </div>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        <img src={Message} alt="" />
                    </div>
                    <p>Message</p>
                </div>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        <img src={Notifications} alt="" />
                    </div>
                    <p>Notification</p>
                </div>
                <div className='topBar-menu' >
                    <div className='topBar-menu_icon'>
                        <img src={People} alt="" />
                    </div>
                    <p style={{display:'flex',alignItems:"center"}}>You </p>
                </div>
            </div>
        </div>
    );
}

export default TopBar;