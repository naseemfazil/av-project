import React from 'react';
import TopArrow from "../assests/Top-arrow.svg";
import Forward from "../assests/Forward and Backward Icon.svg";
import CreateSurvey from '../assests/survey_hub/create_survey.webp';
import AirLine from '../assests/survey_hub/Airline.webp';
import Announcement from '../assests/survey_hub/Announcement.webp';
import Survey1 from '../assests/survey_hub/Survey_1.webp';
import Survey2 from '../assests/survey_hub/Survey_2.webp';
import Survey3 from '../assests/survey_hub/Survey_3.webp';
import Survey4 from '../assests/survey_hub/Survey_4.webp';
import Aviation from '../assests/survey_hub/Aviation.webp';
import Feedback from '../assests/survey_hub/Feedback.webp';
import '../styles/_surveyHub.scss';
import Img from '../components/img';

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
            bgImg: Aviation,
            bgColur: Survey1
        },
        {
            title: "Airline and Aviation",
            content: "This survey is about the airline mechanism procedure and aviation fuel procedure. This will",
            bgImg: Feedback,
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

        <div className='card survey-hub-card'>
            <div className="heading-row">
                <span>Survey Hub</span>
                <span>
                    <Img src={Forward} alt=" " />
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
                            <Img src={TopArrow} alt="" />
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
                                <Img src={eachDtls.bgImg} alt='' />
                            </div>

                            <div className='survey-hub-sub-conent' style={{ backgroundImage: `url(${eachDtls.bgColur})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <p className="font-bold">{eachDtls.title}</p>
                                <p className="font-medium">
                                    {eachDtls.content}
                                </p>
                                <div className='survey-hub-readme'>
                                    <p className='underline-text'>Readme</p>
                                    <Img src={TopArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}


                {/* <div className='survey-hub-sub-card '>
                    <div className='survey-hub-image'>
                        <Img src={AirLine} alt='' />
                    </div>

                    <div className='survey-hub-sub-conent'>
                        <p className="font-bold">Airline and Aviation</p>
                        <p className="font-medium">
                            This survey is about the airline mechanism procedure and aviation fuel procedure. This will
                        </p>
                        <div className='survey-hub-readme'>
                            <p className='underline-text'>Readme</p>
                            <Img src={TopArrow} alt="" />
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    );
}

export default SurveyHub;