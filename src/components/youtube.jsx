import React from 'react';
import '../styles/_youtube.scss';
import "../styles/_common.scss";
import "../styles/_commonStyles.scss";
import Event from '../assests/youtube/Event-Icon.svg';
import World from "../assests/Privacy - Public Icon.svg";
import Forward from "../assests/Forward and Backward Icon.svg";
import Img from '../components/img';


const Youtube = () => {
    return (


        <div className='youtube-container'>
            <div className='live-video'>

                <iframe width={'100%'} height="315"
                    src="https://www.youtube.com/embed/2ywxK3HC4iA?autoplay=i" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className='yt-live-content'>
                <div className='yt-lc-one'>

                    <span className='event-one-game'>

                        <span className='event-time'>
                            <Img src={Event} alt="" width={28}/>
                            <span className='font-medium'>Event</span>
                        </span>
                        <span className='game-event-container'>
                            <div className='gamer-title'>

                                <span className='font-bold'>
                                    Gamers event at Romania
                                </span>
                                <span style={{ color: "#ccc" }}>.</span>

                                <Img className="future-ai_title_world_image" src={World} alt="" />
                            </div>

                            <span style={{ fontSize: '13px', color: '#6C757D' }}>
                                online events
                            </span>
                        </span>

                    </span>
                    <button className='primary_btn' style={{ height: 'fit-content' }}>
                        Join now
                    </button>
                </div>
                <div className='yt-lc-two'>
                    <span className='yt-lc-two-label font-medium '>
                        We're thrilled to announce that the Glublu-sponsored online esports tournament is currently live! This event is a unique opportunity to foster team bonding, motivation, and collaboration within our organization.Open to all departments, the tournament encourages participation from every corner of our team, creating an inclusive and engaging atmosphere. The ultimate goal is to showcase teamwork and strategic prowess, with the last standing team emerging victorious.
                    </span>
                </div>

                <div className='yt-lc-three'>
                    <span className='underline-text'>
                        Read more
                    </span>
                    <span>
                        <Img src={Forward} alt=" " />
                    </span>

                </div>
            </div>
        </div>


    );
}

export default Youtube;