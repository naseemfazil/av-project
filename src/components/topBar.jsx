import React from 'react';
import '../styles/_topBar.scss';
import AnimationRotation from '../assests/points-rotation/animation_lmx4zxty_small.gif';
import Lottie from 'react-lottie';
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
            <div class="search-container">
                <i class="search-icon fas fa-search"></i>
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