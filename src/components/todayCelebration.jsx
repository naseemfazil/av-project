import React from 'react';
import '../styles/_todayCelebration.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Birthday from '../assests/Birthday.svg';

const TodayCelabration = () => {
    return (

        <div className='today-celebration card' >

            <div className="heading-row">
                <span>
                    Today Celebration
                </span>
                <span>
                    <img src={TopArrow} alt='' />
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
                                <span >
                                    <img src={Birthday} />
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Wish
                            </button>
                        </span>
                    </span>
                </div>
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
                                <span >
                                    <img src={Birthday} />
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Wish
                            </button>
                        </span>
                    </span>
                </div>
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
                                <span >
                                    <img src={Birthday} />
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Wish
                            </button>
                        </span>
                    </span>
                </div>
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
                                <span >
                                    <img src={Birthday} />
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Wish
                            </button>
                        </span>
                    </span>
                </div>
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
                                <span >
                                    <img src={Birthday} />
                                </span>
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
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