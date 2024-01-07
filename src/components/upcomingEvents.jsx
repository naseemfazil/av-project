import React from 'react';
import '../styles/_upcomingEvents.scss'

const UpcomingEvents = () => {
    return (

        <div className='upcoming-event card'>

            <div className="heading-row">
                <span>
                    Upcoming Events
                </span>
                <span>
                    icon
                </span>
            </div>

            <div className="scroll-content">

                <div className="details-card">
                    <span className="event-content">
                        <span className='date'>
                            <span className='date-lable'>
                                22
                            </span>
                            <span>
                                Feb
                            </span>
                            {/* <img height="50" width="50" src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar"></img> */}
                        </span>
                        <span className="event-details">
                            <span className="event-name">
                                Benford Black
                            </span>
                            <span className="place-name">
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
                                Notify me
                            </button>
                        </span>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default UpcomingEvents;