import React from 'react';
import '../styles/_socialHub.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Forward from '../assests/Forward and Backward Icon.svg';

const SocialHub = () => {
    return (
        <div className='social-hub card'>

            <div className="heading-row">
                <span>
                    Social Hub
                </span>
                <span>
                    <img src={Forward} alt=' ' />
                </span>
            </div>
            <div className='social-hub_container'>
                <div className='child-card' style={{ marginTop: '4px' }}>

                    <div className='child-heading-row'>
                        <span>
                            <img src={TopArrow} alt="" />
                        </span>
                    </div>

                    <div className='child-content social-hub_content'>
                        <span className='font-bold'>
                            Post your thoughts
                        </span>

                        <span className='font-medium social-hub_sub-content'>
                            Feel like sharing something? Share your thoughts, ideas, or updates with the community.
                        </span>

                        <span>
                            <button className='round_btn'>
                                Create post
                            </button>
                        </span>
                    </div>

                </div>

                <div className='child-card' style={{ marginTop: '4px' }}>

                    <div className='child-heading-row'>
                        <span>
                            <img src={TopArrow} alt="" />
                        </span>
                    </div>

                    <div className='child-content social-hub_content'>
                        <span className='font-bold'>
                            Post your thoughts
                        </span>

                        <span className='font-medium social-hub_sub-content'>
                            Feel like sharing something? Share your thoughts, ideas, or updates with the community.
                        </span>

                        <span>
                            <button className='round_btn'>
                                Create post
                            </button>
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SocialHub;