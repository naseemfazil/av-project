import React from 'react';
import '../styles/_slider.scss';
import '../styles/_commonStyles.scss';

const Slider = () => {
    return (

        <div className='slider'>

            <div className='survey slider-child-width'>

                <div className='heading'>
                    <h4>Survey</h4>
                </div>
                <div className='survey-content'>
                    <div className='text-content'>
                        Share and contribute to valuable information in our community survey.
                    </div>
                    <img src='' alt='' />
                </div>
                <div className='button'>
                    <button className='primary_btn'>
                        Let's explore!
                    </button>
                </div>
            </div>

            <div className='project-management slider-child-width'>
                project-management
            </div>

            <div className='voice-zone slider-child-width'>
                voice-zone
            </div>

            <div className='celebration slider-child-width'>
                celebration
            </div>
        </div >
    );
}

export default Slider;