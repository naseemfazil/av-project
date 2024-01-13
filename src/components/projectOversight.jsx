import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_projectOversight.scss';
import Forward from '../assests/Forward and Backward Icon.svg';
import TopArrow from '../assests/Top-arrow.svg';
import Dribble from '../assests/Dribble.png';


const ProjectOversight = () => {
    // const SocialHubDetails = [
    //     {
    //         title: "Post your thoghts",
    //         content: "Feel like sharing somethings? Share your thoughts, idea, or updates with the community.",
    //         btnTxt: "Create post",
    //         bgImg: SocialHubBg
    //     },

    //     {
    //         title: "Having a buring questions?",
    //         content: "Having a questions in mind? Ask the community& get answers from fellow members!",
    //         btnTxt: "Ask Questions",
    //         bgImg: Question
    //     },

    //     {
    //         title: "Share important news",
    //         content: "Create a new annoucement and keep our communtiy informed and engaged!",
    //         btnTxt: "Announcement",
    //         bgImg: Announment
    //     },

    //     {
    //         title: "Share your expertise ",
    //         content: "Contribute valuble insights and knowlege to our community",
    //         btnTxt: "Write Article",
    //         bgImg: Article
    //     },


    //     {
    //         title: "Share your expertise ",
    //         content: "Contribute valuble insights and knowlege to our community",
    //         btnTxt: "Write Article",
    //         bgImg: Blog
    //     }

    // ];  //project-oversight_container
    return (
        <>
            <div className='project-oversight_card'>

                <div className="heading-row">
                    <span>
                        Project oversight
                    </span>
                    <span>
                        <img src={Forward} alt=' ' />
                    </span>
                </div>

                <div className='project-oversight_container'>
                    <div className='child-card' style={{ marginTop: '4px', backgroundImage: `sss` }}>

                        <div className='child-heading-row'>
                            <span>
                                <img src={TopArrow} alt="" />
                            </span>
                        </div>

                        <div className='child-content social-hub_content'>
                            <span className='font-bold'>
                                Initiate Project
                            </span>

                            <span className='font-medium social-hub_sub-content'>
                                Kickstart seamless project coordination and organization with ease
                            </span>

                            <span>
                                <button className='round_btn'>
                                    Let's Explore!
                                </button>
                            </span>
                        </div>

                    </div>


                    <div className=''>
                        <div className='project-oversight_inner-card child-card'>

                            <div className='child-heading-row'>
                                <span>
                                    <img src={TopArrow} alt="" />
                                </span>
                            </div>

                            <div className='project-oversight_content'>
                                <img src={Dribble} alt="" width={70} />
                                <div className=''>
                                    <p className='font-bold'>Dribble design mockup</p>
                                    <p className='font-medium'>When I first got into the online adverting business, I was looking for the magical</p>
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className='underline-text'>Readmore</p>
                                </div>
                                <div className='project-oversight_footer'>
                                    <p className='font-medium'>Project Completion</p>
                                    <p className='red-progress'>56%</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectOversight;