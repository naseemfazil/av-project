import React from 'react';
import '../styles/_homePage.scss';
import '../styles/_common.scss';
import SideBar from './sideBar';
import TodayCelabration from './todayCelebration';
import Slider from './slider';
import Announcement from './announcement';
import ExpandCircle from './expandCircle';
import UpcomingEvents from './upcomingEvents';
import TopBar from './topBar';
import SocialHub from './socialHub';
import AppreciationAwards from './appreciationAwards';

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

                    <div className='content'>

                        <div className='card-height' >
                            <Slider />
                        </div>

                        <div className='width-49' >
                            <Announcement />
                        </div>

                        <div className='width-49'>
                            <TodayCelabration />
                        </div>

                        <div className='width-49'>
                            <ExpandCircle></ExpandCircle>
                        </div>

                        <div className='width-49'>
                            <UpcomingEvents />
                        </div>

                        <div className='width-99'>
                            <SocialHub />
                        </div>

                        <div className='width-99'>
                            <AppreciationAwards />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;