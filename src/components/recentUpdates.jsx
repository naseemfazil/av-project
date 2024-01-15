import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import Forward from '../assests/Forward and Backward Icon.svg';
import TopArrow from '../assests/Top-arrow.svg';

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
            </div>

        </div>

    );
}

export default RecentUpdates;

