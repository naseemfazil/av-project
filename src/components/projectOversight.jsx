import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import '../styles/_projectOversight.scss';
import Forward from '../assests/Forward and Backward Icon.svg';
import TopArrow from '../assests/Top-arrow.svg';
import Dribble from '../assests/project-oversight/Dribble.png';
import Paypal from '../assests/project-oversight/Paypal.png';
import Sketch from '../assests/project-oversight/sketch.png';


import Project1 from '../assests/project-oversight/Project1.svg';
import Project2 from '../assests/project-oversight/Project2.svg';
import Project3 from '../assests/project-oversight/Project3.svg';

import Img from '../components/img';

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

    const projectOversight = [
        {
            title: "Dribbble design mockup",
            content: "When I first got into the online advertising business, I was looking for the magical combination that would put my website",
            isGreen: true,
            bgImg: Project1,
            icon: Dribble

        },
        {
            title: "Sketch resources website",
            content: "When I first got into the online advertising business, I was looking for the magical combination that would put my website",
            isRed: true,
            bgImg: Project2,
            icon: Sketch

        },
        {
            title: "Create financial report",
            content: "Designed to enhance financial visibility, transparency, and decision-making, FinSight simplifies the process of generating ",
            isProgress: true,
            bgImg: Project3,
            icon: Paypal

        },
        // {
        //     title: "Dropbox mobile app design",
        //     content: "Access a diverse range of project management templates designed specifically for Sketch. From Gantt charts to Kanban boards...",
        //     isGreen: true,
        //     bgImg: '',
        //     icon: Dribble

        // }
    ]
    return (
        <>
            <div className='project-oversight_card'>

                <div className="heading-row">
                    <span>
                        Project oversight
                    </span>
                    <span>
                        <Img src={Forward} alt=' ' />
                    </span>
                </div>

                <div className='project-oversight_container'>
                    <div className='child-card project-create-card' style={{ marginTop: '4px', backgroundImage: `sss` }}>

                        <div className='child-heading-row'>
                            <span>
                                <Img src={TopArrow} alt="" />
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


                    <div className='project-second-card'>
                        {projectOversight.map((eachDtls, index) => {
                            return (
                                <div className='project-oversight_inner-card child-card' style={{ backgroundImage: `url(${eachDtls.bgImg})` }}>

                                    <div className='child-heading-row'>
                                        <span>
                                            <Img src={TopArrow} alt="" />
                                        </span>
                                    </div>

                                    <div className='project-oversight_content'>
                                        <Img src={eachDtls.icon} alt="" width={70} />
                                        <div className=''>
                                            <p className='font-bold'>{eachDtls.title}</p>
                                            <p className='font-medium'>{eachDtls.content}</p>
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <p className='underline-text'>Readmore</p>
                                        </div>
                                        <div className='project-oversight_footer'>
                                            <p className='font-medium'>Project Completion</p>
                                            {/* <p className='red-progress'>56%</p> */}
                                            <p className={`${eachDtls.isRed ? 'red-progress' : eachDtls.isProgress ? 'in-progress' : 'green-progress'}`}>56%</p>
                                        </div>
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectOversight;