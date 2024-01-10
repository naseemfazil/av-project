import React from 'react';
import '../styles/_socialHub.scss';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss';
import TopArrow from '../assests/Top-arrow.svg';
import Forward from '../assests/Forward and Backward Icon.svg';
import SocialHubBg from '../assests/Social\ Hub\ -\ Post.svg';
import Question from '../assests/Social Hub - Question.svg';
import Announment from '../assests/Social Hub- Announcement.svg';
import Article from '../assests/Social Hub- Article.svg';
import Blog from '../assests/Social Hub- Blog.svg';
import World from '../assests/Privacy - Public Icon.svg'


const SocialHub = () => {
    const SocialHubDetails = [
        {
            title: "Post your thoghts",
            content: "Feel like sharing somethings? Share your thoughts, idea, or updates with the community.",
            btnTxt: "Create post",
            bgImg: SocialHubBg
        },

        {
            title: "Having a buring questions?",
            content: "Having a questions in mind? Ask the community& get answers from fellow members!",
            btnTxt: "Ask Questions",
            bgImg: Question
        },

        {
            title: "Share important news",
            content: "Create a new annoucement and keep our communtiy informed and engaged!",
            btnTxt: "Announcement",
            bgImg: Announment
        },

        {
            title: "Share your expertise ",
            content: "Contribute valuble insights and knowlege to our community",
            btnTxt: "Write Article",
            bgImg: Article
        },


        {
            title: "Share your expertise ",
            content: "Contribute valuble insights and knowlege to our community",
            btnTxt: "Write Article",
            bgImg: Blog
        }

    ];
    return (
        <>
            <div className='social-hub card'>

                <div className="heading-row">
                    <span>
                        Social Hub
                    </span>
                    <span>
                        <img src={Forward} alt=' ' />
                    </span>
                </div>
                <div className='social-hub_container'>
                    {SocialHubDetails.map((eachDtls, index) => {
                        return (
                            <div className='child-card' style={{ marginTop: '4px', backgroundImage: `${eachDtls.bgImg}` }}>

                                <div className='child-heading-row'>
                                    <span>
                                        <img src={TopArrow} alt="" />
                                    </span>
                                </div>

                                <div className='child-content social-hub_content'>
                                    <span className='font-bold'>
                                        {eachDtls.title}
                                    </span>

                                    <span className='font-medium social-hub_sub-content'>
                                        {eachDtls.content}
                                    </span>

                                    <span>
                                        <button className='round_btn'>
                                            {eachDtls.btnTxt}
                                        </button>
                                    </span>
                                </div>

                            </div>
                        )
                    })}

                </div>


            </div>

            {/* Future AI card */}
            <div className='future-ai_card card'>
                {/* <div>
                    hi
                </div> */}
                <div className='future-ai_container'>
                    <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                    <div className='future-ai_header'>
                        <div className='future-ai_title'>
                            <p>
                                The Future is AI
                            </p>
                            <span style={{ color: "#ccc" }}>.</span>
                            <span>
                                <img src={World} alt='' width={20} height={20} />
                            </span>
                        </div>

                        <div className='future-ai_group-img'>

                            <div className='future-round-image_container'>
                                <div class="future-round-image" style={{ zIndex: "1" }}>
                                    <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                                </div>
                                <div class="future-round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                                    <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                                </div>
                                <div className='future-round-text' style={{ marginLeft: "-1rem", zIndex: "2" }}>
                                    <p>+40</p>
                                </div>
                            </div>
                            <p>1.4k Members</p>
                        </div>
                    </div>
                    <p className='future-ai_content'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem rerum mollitia tenetur, enim, vero beatae molestiae nulla officiis ipsam facilis, quia ab illo commodi? Quibusdam numquam officiis quo provident? Sit?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem rerum mollitia tenetur, enim, vero beatae molestiae nulla officiis ipsam facilis, quia ab illo commodi? Quibusdam numquam officiis quo provident? Sit?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem rerum mollitia tenetur, enim, vero beatae molestiae nulla officiis ipsam facilis, quia ab illo commodi? Quibusdam numquam officiis quo provident? Sit?
                    </p>
                    <p className='underline-text'>Readmore</p>
                    <div className='future-ai_btn'>
                        <button className='primary_btn'>Accept Invite</button>
                        <button className='secondary_btn'>Not interested</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialHub;


