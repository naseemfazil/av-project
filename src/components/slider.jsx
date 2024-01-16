import React from 'react';
import '../styles/_slider.scss';
import '../styles/_commonStyles.scss';
import Survey from '../assests/Sliders/Survey.svg';
import projectManagemrnt from '../assests/Sliders/Project Management.svg';
import socialHub from '../assests/Sliders/Social-Hub.svg';
import kudos from '../assests/Sliders/Kudos.svg';
import rewards from '../assests/Sliders/Rewards.svg';
import awards from '../assests/Sliders/Awards.svg';
import voiceZone from '../assests/Sliders/Voice-zone.svg';
import celebrations from '../assests/Sliders/Celebrations.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Sliders = () => {

    const sliderDetails = [
        {
            title: 'Social Hub',
            content: ' Feel like sharing something? Share your thoughts, ideas, or updates with the community.',
            btnName: 'Lets Explore!',
            bgImg: socialHub
        },
        {
            title: 'Kudos',
            content: 'Show your appreciation and give kudos for their outstanding contributions!',
            btnName: 'Lets Appreciate!',
            bgImg: kudos
        },
        {
            title: 'Rewards',
            content: 'Elevate your achievements and experiences with exciting rewards on your journey',
            btnName: 'Lets Appreciate!',
            bgImg: rewards
        },
        {
            title: 'Awards',
            content: 'Acknowledge outstanding accomplishments with prestigious awards and recognition.',
            btnName: 'Lets Appreciate!',
            bgImg: awards
        },
        {
            title: 'Voice Zone',
            content: 'Engage in lively conversations and share your thoughts in the vibrant Voice Zone community.',
            btnName: 'Lets Explore!',
            bgImg: voiceZone
        },
        {
            title: 'Celebrations',
            content: 'Join the festivity and commemorate special occasions with joyous celebrations.',
            btnName: 'Lets Celebrate!',
            bgImg: celebrations
        },
        {
            title: 'Survey',
            content: 'Share and contribute to valuable information in our community survey..',
            btnName: 'Lets Explore!',
            bgImg: Survey
        },
        {
            title: 'Project Management',
            content: 'Show your appreciation and give kudos for their outstanding contributions!',
            btnName: 'Lets Appreciate',
            bgImg: projectManagemrnt
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        // <Slider {...settings}>
        <div className='slider'>

            {/* <div className="slider-people-card">

                <div className="round-image_container">
                    <div class="round-image" style={{ zIndex: "1" }}>
                        <img
                            src={"https://randomuser.me/api/portraits/men/20.jpg"}
                            alt="Avatar"
                        />
                    </div>
                    <div class="round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                        <img
                            src={"https://randomuser.me/api/portraits/men/20.jpg"}
                            alt="Avatar"
                        />
                    </div>
                    <div
                        className="round-text"
                        style={{ marginLeft: "-1rem", zIndex: "2" }}
                    >
                        <p>+40</p>
                    </div>
                </div>

                <div className="explore-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                        ratione non magnam reprehenderit blanditiis sit provident quas
                        exercitationem, nihil nemo ea quidem natus illum sequi qui facilis
                        quod doloremque? Numquam.
                    </p>
                </div>
                
                <div className="explore-btn_content">
                    <button className="primary_btn">Let's explore</button>
                </div>
            </div> */}

            <div className='kudos-received'>
                <div>
                    <div className="round-image_container">
                        <div class="round-image" style={{ zIndex: "1" }}>
                            <img
                                src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                alt="Avatar"
                            />
                        </div>
                        <div class="round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                            <img
                                src={"https://randomuser.me/api/portraits/men/20.jpg"}
                                alt="Avatar"
                            />
                        </div>
                        <div
                            className="round-text"
                            style={{ marginLeft: "-1rem", zIndex: "2" }}
                        >
                            <p>+40</p>
                        </div>
                    </div>
                </div>
                <div className='kr-names'>
                    Alfie Solomon(You) <span style={{fontWeight:'400'}}>and</span> 40 others
                </div>
                <div className='font-medium'>
                    Received Kudos from
                     <span className='font-bold'>
                         Michael Mayers
                    </span>
                </div>
                <div className='kr-content font-medium'>
                    Big congratulations for their outstanding dedication and hard work! 🏆Your contributions and positive attitude make our team shine.
                </div>
                <div className='hashtags'>
                    #SpreadJoy #Kudos
                </div>
            </div>

            {/* <div className='outstanding-employee'>
                <div>
                    icons
                </div>
                <div>
                    Outstanding Employees Award
                </div>
                <div className='kr-names'>
                    Alfie Solomon(You)
                </div>
                <div>
                    get Award from
                    <span className='font-weight-bold'>
                        Michael Mayers
                    </span>

                </div>
                <div className='kr-content'>
                    Celebrating for their unwavering commitment, exceptional teamwork, and exemplary performance.🌟 🏆🙌
                </div>
                <div className='hashtags'>
                    #Awards #Employeeawards
                </div>
            </div> */}

            {sliderDetails.map((eachDtls, index) => {
                return (
                    <div className='survey slider-child-width' style={{ backgroundImage: `url(${eachDtls.bgImg})` }}>

                        <div className='heading'>
                            <h4>{eachDtls.title}</h4>
                        </div>
                        <div className='survey-content'>
                            <div className='text-content'>
                                {eachDtls.content}
                            </div>
                            <img src='' alt='' />
                        </div>
                        <div className='button'>
                            <button className='primary_btn'>
                                {eachDtls.btnName}
                            </button>
                        </div>
                    </div>
                )
            })}





        </div >
        //    </Slider>
    );
}

export default Sliders;