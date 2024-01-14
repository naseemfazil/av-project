import React from 'react';
import "../styles/_common.scss";
import "../styles/_commonStyles.scss";
import Forward from "../assests/Forward and Backward Icon.svg";
import TopArrow from "../assests/Top-arrow.svg";
import Complaint from '../assests/voice_zone/Complaint.svg';
import Frustration from '../assests/voice_zone/Frustration.svg';
import Idea from '../assests/voice_zone/Idea.svg';
import Suggestion from '../assests/voice_zone/Suggestion.svg';



const VoiceZone = () => {

    const voiceZone = [
        {
            title: "Brilliant idea to share?",
            content:
                "Share it with the community and inspire others with your creativity!",
            btnTxt: "Let's Share Idea!",
            bgImg: Idea,
        },
        {
            title: "Your input matters!",
            content:
                "Share your suggestions and help shape our community better!",
            btnTxt: "Suggestion",
            bgImg: Suggestion,
        },
        {
            title: "An issue or concern?",
            content:
                "Submit a complaint to help us address and resolve it, making our community better for all.",
            btnTxt: "Make Complaint",
            bgImg: Complaint,
        },

        {
            title: "Feeling stressed?",
            content:
                "This is a safe space to express your frustrations and find support. Let it out!",
            btnTxt: "Frustration",
            bgImg: Frustration,
        },




    ];
    return (
        <div className='card'>
            <div className="heading-row">
                <span>Voice Zone</span>
                <span>
                    <img src={Forward} alt=" " />
                </span>
            </div>


            <div className="rewards-recognition-container">
                {voiceZone.map((eachDtls, index) => {
                    return (
                        <div
                            className="child-card"
                            style={{
                                marginTop: "4px",
                                backgroundImage: `url(${eachDtls.bgImg})`,
                            }}
                        >
                            <div className="child-heading-row">
                                <span>
                                    <img src={TopArrow} alt="" />
                                </span>
                            </div>

                            <div className="child-content social-hub_content">
                                <span className="font-bold">{eachDtls.title}</span>

                                <span className="font-medium social-hub_sub-content">
                                    {eachDtls.content}
                                </span>

                                <span>
                                    <button className="round_btn">{eachDtls.btnTxt}</button>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default VoiceZone;