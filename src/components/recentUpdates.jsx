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

            <div className='ru-container'>
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

                <div className='second-row'>

                    <div>
                        <div className='quick-poll'>

                            <div className='qp-heading'>
                                <span>
                                    Quick poll
                                </span>
                                <span>
                                    icon
                                </span>
                            </div>

                            <div className='qp-question-label'>
                                Why do we use Shift + Alt + D in Adobe XD. If we use it what will happen ?
                            </div>

                            <div>
                                <div className='qp-options'>
                                    Used to scroll the object both sides
                                </div>
                                <div className='qr-progress-bar'>
                                </div>
                            </div>

                            <div>
                                <div className='qp-options'>
                                    Used to scroll the object both sides
                                </div>
                                <div className='qr-progress-bar'>
                                </div>
                            </div>
                            <div className='qp-sec-left'>
                                <span>
                                    30 sec left icon
                                </span>
                            </div>
                        </div>
                        <div className='qp-navigation'>
                            <span>
                                navigation
                            </span>
                        </div>
                    </div>


                    <div className='pc-game'>

                        <div className='game-child-content'>
                            <div className='post-date'>
                                <span>
                                    <span>
                                        post
                                    </span>
                                    <span>
                                        Wed, 3rd Jan
                                    </span>
                                </span>
                                <span>icon</span>
                            </div>

                            <div>
                                <span className='game-heading'>
                                    The Ever-Growing World of PC Games
                                </span>
                            </div>

                            <div>
                                <span className='game-content'>
                                    The world of PC gaming is a vast and ever-evolving landscape, offering an incredible array of experiences for players of all tastes and preferences.
                                </span>
                            </div>

                            <div className='likes-row'>
                                <span>416 People liked and reacted</span>
                                <span>.</span>
                                <span>Comments 108</span>
                                <span>.</span>
                                <span>Repost 560</span>
                                <span>.</span>
                                <span>Views 140</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RecentUpdates;

