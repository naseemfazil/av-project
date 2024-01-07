import React from 'react';
import '../styles/_topBar.scss';

const TopBar = () => {
    return (
        <div className='topBar-container'>
            <div class="search-container">
                <i class="search-icon fas fa-search"></i>
                <input type="text" class="search-box" placeholder="Search..." />
            </div>
            <div>
                <button className='topBar-btn'><span></span>15.8k <span>Points</span></button>
            </div>

            <div className='topBar-menu-container'>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        1
                    </div>
                    <p>Flikx</p>
                </div>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        1
                    </div>
                    <p>Create</p>
                </div>
                <div className='topBar-menu'>
                    <div className='topBar-menu_icon'>
                        1
                    </div>
                    <p>M</p>
                </div>
            </div>
        </div>
    );
}

export default TopBar;