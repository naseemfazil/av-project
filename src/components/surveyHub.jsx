import React from 'react';
import TopArrow from "../assests/Top-arrow.svg";
import Forward from "../assests/Forward and Backward Icon.svg";
import CreateSurvey from '../assests/survey_hub/create_survey.svg';
import AirLine from '../assests/survey_hub/Airline.svg';
import Announcement from '../assests/survey_hub/Announcement.svg';
import Survey1 from '../assests/survey_hub/Survey_1.svg';
import Survey2 from '../assests/survey_hub/Survey_2.svg';
import Survey3 from '../assests/survey_hub/Survey_3.svg';
import Survey4 from '../assests/survey_hub/Survey_4.svg';
import '../styles/_surveyHub.scss';


const SurveyHub = () => {
    const surveyHub = [

        {
            title: "Airline and Aviation",
            content: "This survey is about the airline mechanism procedure and aviation fuel procedure. This will",
            bgImg: AirLine,
            bgColur: Announcement
        },

        {
            title: "Aviation and Mechanism",
            content: "Aviation and Mechanism kind of questions and how to improve it. Then Rate your",
            bgImg: AirLine,
            bgColur: Survey1
        },
        {
            title: "Airline and Aviation",
            content: "This survey is about the airline mechanism procedure and aviation fuel procedure. This will",
            bgImg: AirLine,
            bgColur: Survey2
        },
        // {
        //     title: "Airline and Aviation",
        //     content: "This survey is about the airline mechanism procedure and aviation fuel procedure. This will",
        //     bgImg: AirLine,
        //     bgColur: Survey3
        // }
    ]
    return (

        <div className='card'>
            <div className="heading-row">
                <span>Voice Zone</span>
                <span>
                    <img src={Forward} alt=" " />
                </span>
            </div>
            <div className="rewards-recognition-container">
                <div
                    className="child-card"
                    style={{
                        marginTop: "4px",
                        backgroundImage: `url(${CreateSurvey})`,
                    }}
                >
                    <div className="child-heading-row">
                        <span>
                            <img src={TopArrow} alt="" />
                        </span>
                    </div>

                    <div className="child-content social-hub_content">
                        <span className="font-bold">Insights or opinions?</span>

                        <span className="font-medium social-hub_sub-content">
                            Create a new survey to gather valuable feedback and make data-driven decisions !
                        </span>

                        <span>
                            <button className="round_btn">Let's Explore!</button>
                        </span>
                    </div>
                </div>

                {surveyHub.map((eachDtls, index) => {
                    return (

                        <div className='survey-hub-sub-card ' >
                            <div className='survey-hub-image'>
                                <img src={eachDtls.bgImg} alt='' />
                            </div>

                            <div className='survey-hub-sub-conent' style={{ backgroundImage: `url(${eachDtls.bgColur})` }}>
                                <p className="font-bold">{eachDtls.title}</p>
                                <p className="font-medium">
                                    {eachDtls.content}
                                </p>
                                <div className='survey-hub-readme'>
                                    <p className='underline-text'>Readme</p>
                                    <img src={TopArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}


                {/* <div className='survey-hub-sub-card '>
                    <div className='survey-hub-image'>
                        <img src={AirLine} alt='' />
                    </div>

                    <div className='survey-hub-sub-conent'>
                        <p className="font-bold">Airline and Aviation</p>
                        <p className="font-medium">
                            This survey is about the airline mechanism procedure and aviation fuel procedure. This will
                        </p>
                        <div className='survey-hub-readme'>
                            <p className='underline-text'>Readme</p>
                            <img src={TopArrow} alt="" />
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    );
}

export default SurveyHub;