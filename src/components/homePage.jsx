import React from 'react';
import '../styles/_homePage.scss';
import SideBar from './sideBar';
import TodayCelabration from './todayCelebration';
import Slider from './slider';
import Announcement from './announcement';
import ExpandCircle from './expandCircle';
import UpcomingEvents from './upcomingEvents';
import TopBar from './topBar';

const HomePage = () => {
    return (
        <>
            <div className='homepage'>
                <div className='sidebar'>
                    <SideBar />
                </div>
                <div className='home'>

                    <div className='topbar'>
                        <TopBar />
                    </div>

                    {/* <div className='content'>

                        <div >
                            <Slider></Slider>
                        </div>

                        <div className='width-49' >
                            <Announcement></Announcement>
                        </div>

                        <div className='width-49'>
                            <TodayCelabration></TodayCelabration>
                        </div>

                        <div className='width-49'>
                            <ExpandCircle></ExpandCircle>
                        </div>

                        <div className='width-49'>
                            <UpcomingEvents></UpcomingEvents>
                        </div>


                    </div> */}


                </div>
            </div>
        </>
    );
}

export default HomePage;