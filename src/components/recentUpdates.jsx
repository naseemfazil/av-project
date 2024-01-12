import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_recentUpdates.scss';
import Forward from '../assests/Forward and Backward Icon.svg';


const RecentUpdates = () => {

    return (
        <div className='recent-updates'>
            <div className="heading-row">
                <span>
                    Recent Updates
                </span>
                <span>
                    <img src={Forward} alt=' ' />
                </span>
            </div>

            <div className='recent-updates-content'>
                <div className="first">

                    <div className='article-content'>
                        <div>
                            <span>
                                <span>
                                    Article
                                </span>
                                <span>
                                    Thu, 28th Dec
                                </span>
                            </span>
                            <span>
                                arrow
                            </span>
                        </div>
                        <div>
                            <span>
                                Things you should know about Glueblu
                            </span>
                        </div>
                        <div>
                            <span>
                                Step into the virtual wonderland of Glublu Community, a digital haven where enthusiasts of whimsy and fantasy converge... Read more
                            </span>
                        </div>
                    </div>


                </div>

                <div className="second">
                    <div className="second-one">Two one</div>
                    <div className="second-two">

                        <div className="input">
                            input
                        </div>

                        <div className="story">
                            story
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default RecentUpdates;

