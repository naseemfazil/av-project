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

                        <div className='card-height' >
                            <Slider></Slider>
                        </div>

                        <div className='width-49 card-height ' >
                            <Announcement></Announcement>
                        </div>

                        <div className='width-49 card-height '>
                            <TodayCelabration></TodayCelabration>
                        </div>

                        <div className='width-49 card-height '>
                            <ExpandCircle></ExpandCircle>
                        </div>

                        <div className='width-49 card-height '>
                            <UpcomingEvents></UpcomingEvents>
                        </div>

                        <div className='width-100'>
                            <iframe width={'100%'} height="315"
                                src="https://www.youtube.com/embed/2ywxK3HC4iA?autoplay=i" frameborder="0" allowfullscreen></iframe>
                        </div>


                    </div>


                </div>
            </div>
        </>
    );
}

export default HomePage;