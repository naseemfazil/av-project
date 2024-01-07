import React from 'react';
import '../styles/_topBar.scss';
import Flix from '../assests/Flix.svg';
import Create from '../assests/Create.svg';
import Message from '../assests/Message.svg';
import Notifications from '../assests/Notification.svg';
import People from '../assests/Group 350.png';
import  DownArrow from '../assests/Down Arrow.svg'

import Search from '../assests/Search.svg';

const TopBar = () => {
    return (
        <div className='topBar-container'>
            <div className="search-container">
                {/* <i className="search-icon fas fa-search"></i> */}
                <img src={Search} alt="" className="search-icon fas fa-search" width={20} />

                <input type="text" class="search-box" placeholder="Search..." />
            </div>
            <div>
                <button className='topBar-btn'><span></span>15.8k <span>Points</span></button>
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
                    <p style={{display:'flex',alignItems:"center"}}>You <span><img src={DownArrow} width={20} alt=''/></span></p>
                </div>
            </div>
        </div>
    );
}

export default TopBar;