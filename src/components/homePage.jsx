import React from 'react';
import '../styles/_homePage.scss';
import SideBar from './sideBar';
import TodayCelabration from './todayCelebration';
import Slider from './slider';
import Announcement from './announcement';
import ExpandCircle from './expandCircle';
import UpcomingEvents from './upcomingEvents';

const HomePage = () => {
    return (
        <>
            <div className='homepage'>
                <div className='sidebar'>
                    <SideBar />
                </div>
                <div className='home'>

                    <div className='topbar'>
                          
                    </div>

                    <div className='content'>

                        <div >
                            <Slider></Slider>
                        </div>

                        <div className='width-45' >
                            <Announcement></Announcement>
                        </div>

                        <div className='width-45'>
                            <TodayCelabration></TodayCelabration>
                        </div>

                        <div className='width-45'>
                            <ExpandCircle></ExpandCircle>
                        </div>

                        <div className='width-45'>
                            <UpcomingEvents></UpcomingEvents>
                        </div>


                    </div>


                </div>
            </div>
        </>
    );
}

export default HomePage;