import React from 'react';
import '../styles/_todayCelebration.scss';
import '../styles/_common.scss';

const TodayCelabration = () => {
    return (

        <div className='today-celebration card' >

            <div className="heading-row">
                <span>
                    Today Celebration   
                </span>
                <span>
                    icon
                </span>
            </div>

            <div className="scroll-content">

                <div className="details-card">
                    <span className="content">
                        <span>
                            <img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></img>
                        </span>
                        <span className="person-details">
                            <span className="person-name">
                                Benford Black
                            </span>
                            <span className="event-name">
                                <span>
                                    icon
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary-btn'>
                                Wish
                            </button>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TodayCelabration;