import React from 'react';
import '../styles/_commonStyles.scss';
import '../styles/_upcomingEvents.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Img from '../components/img';

const UpcomingEvents = () => {
    return (

        <div className='upcoming-event card'>

            <div className="heading-row">
                <span>
                    Upcoming Events
                </span>
                <span>
                    <Img src={TopArrow} alt='' />
                </span>
            </div>

            <div className="upcoming-event_details-container">

                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <Img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></Img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
                                {/* <span>
                                    icon
                                </span> */}
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Notify me
                            </button>
                        </span>
                    </span>
                </div>

                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <Img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></Img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
                                {/* <span>
                                    icon
                                </span> */}
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='secondary_btn'>
                                Alread notified
                            </button>
                        </span>
                    </span>
                </div>

                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <Img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></Img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
                                {/* <span>
                                    icon
                                </span> */}
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Notify me
                            </button>
                        </span>
                    </span>
                </div>
                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <Img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></Img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
                                {/* <span>
                                    icon
                                </span> */}
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='primary_btn'>
                                Notify me
                            </button>
                        </span>
                    </span>
                </div>

                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <Img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></Img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
                                {/* <span>
                                    icon
                                </span> */}
                                <span>
                                    Celebrating birthday
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="button">
                        <span>
                            <button className='secondary_btn'>
                                Alread notified
                            </button>
                        </span>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default UpcomingEvents;