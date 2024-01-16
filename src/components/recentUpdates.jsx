import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import Forward from '../assests/Forward and Backward Icon.svg';
import TopArrow from '../assests/Top-arrow.svg';

const RecentUpdates = () => {

    return (
        <div>
            <div className='recent-updates'>
                <div className="heading-row">
                    <span>
                        Recent Updates
                    </span>
                    <span>
                        {/* <img src={TopArrow} alt=' ' /> */}
                    </span>
                </div>

                {/* <div className='recent-updates-content'>
                    <div className="first">

                        <div className='article-content'>
                            <div className='article-first-row'>
                                <span>
                                    <span>
                                        Article
                                    </span>
                                    <span>
                                        Thu, 28th Dec
                                    </span>
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
                                circle icons
                            </span>

                            <span className='mid-text-content'>
                                Stay connected with the updates from your community members
                            </span>

                            <span>
                                50+ Activites
                            </span>
                        </div>


                        <div className="second-two">

                            <div className="input">
                                <span className='icon-row'>
                                    <span>
                                        icon1
                                    </span>

                                    <span>
                                        <img src={TopArrow} alt=' ' />
                                    </span>
                                </span>

                                <span>
                                    profile
                                </span>

                                <span>
                                    Andrew
                                </span>

                                <span className='mid-text-content'>
                                    Why do we use auto layout in figma and XD ?
                                </span>
                                <span>
                                    Type your answer
                                </span>
                            </div>

                            <div className="story">
                                <span className='icon-row'>
                                    <span>
                                        <img src={TopArrow} alt=' ' />
                                    </span>
                                </span>
                                <span>
                                    profile
                                </span>
                                <span>
                                    Create your story
                                </span>
                                <span>
                                    Create story
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
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

    );
}

export default RecentUpdates;

