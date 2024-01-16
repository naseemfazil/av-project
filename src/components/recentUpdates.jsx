import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import Forward from '../assests/Forward and Backward Icon.svg';
import TopArrow from '../assests/Top-arrow.svg';
import AwardsIcon from '../assests/Appreciation-and-Awards/awards-icon.svg';
import Eliipse from '../assests/recent-updates/Ellipse 1.png';

const RecentUpdates = () => {

    return (
        <div className='recent-updates'>
            <div className="heading-row">
                <span>
                    Recent Updates
                </span>
                <span>
                    {/* <img src={TopArrow} alt=' ' /> */}
                </span>
            </div>

            <div className='recent-updates-content'>
                <div className="first">

                    <div className='article-content'>
                        <div className='article-first-row'>
                            <span>
                                <button className="kudos-btn"><span><img src={AwardsIcon} alt="" width={12} /></span> Awards </button>
                                <span className="kudos-btn-sub">Fri,05 Jan</span>
                            </span>
                            <span>
                                <img src={TopArrow} alt=' ' />
                            </span>
                        </div>
                        <div>
                            <span className='article-head'>
                                Things you should know about Glueblu
                            </span>
                        </div>
                        <div>
                            <span className='article-body'>
                                Step into the virtual wonderland of Glublu Community, a digital haven where enthusiasts of whimsy and fantasy converge...
                                <span className='read-more'>
                                    Read more
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="second">
                    <div className="second-one">
                        <span className='top-arrow'>
                            <span>
                                <img src={TopArrow} alt=' ' />
                            </span>
                        </span>
                        <span>
                            <div className=" second-one-circle-icon">
                                <div class="second-one-round-image" style={{ zIndex: "1" }}>
                                    <img
                                        src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                        alt="Avatar"
                                    />
                                </div>
                                <div class="second-one-round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                                    <img
                                        src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                        alt="Avatar"
                                    />
                                </div>
                                <div
                                    className="second-one-round-text"
                                // style={{ marginLeft: "-1rem", zIndex: "2", width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <p >+40</p>
                                </div>
                            </div>
                        </span>

                        <span className='mid-text-content'>
                            Stay connected with the updates from your community members
                        </span>

                        <span className='font-bold'>
                            50+ Activites
                        </span>
                    </div>


                    <div className="second-two">

                        <div className="story-qustions">
                            <span className='icon-row'>
                                <span>
                                    {/* icon1 */}
                                </span>

                                <span style={{ paddingTop: '0.3rem' }}>
                                    <img src={TopArrow} alt=' ' />
                                </span>
                            </span>

                            <span>
                                <img src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                    // style={{ width: '45px', height: "45px", borderRadius: '50%', overflow: 'hidden', border: '5px solid white' }}
                                    alt="" 
                                    className='story-qustions-img'
                                    />
                            </span>

                            <span className='font-bold'>
                                Andrew
                            </span>

                            <span className='mid-text-content'>
                                Why do we use auto layout in figma and XD ?
                            </span>
                            <span>
                                <input type='text' className='feedback-input' placeholder='Type Your answer' />
                            </span>
                        </div>

                        <div className="story">
                            <span className='icon-row'>
                                <span>
                                    <img src={TopArrow} alt=' ' />
                                </span>
                            </span>
                            <span className='story-img-container'>
                                <img src={Eliipse} alt="" />
                            </span>
                            <span className='font-medium'>
                                Create your story
                            </span>
                            <button className='primary_btn'>Create story</button>
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default RecentUpdates;

