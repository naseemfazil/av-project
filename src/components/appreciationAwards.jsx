import React from 'react';
import '../styles/_common.scss';
import '../styles/_commonStyles.scss'
import '../styles/_appreciationAwards.scss';
import TopArrow from '../assests/Top-arrow.svg';


const AppreciationAwards = () => {
    return (
        <div className='card' style={{padding:"0"}}>


          <div className=''>

          </div>


            <div className='explore-card'>
                <div className="explore-heading">


                    <img src={TopArrow} alt='' />
                </div>
                <div className='round-image_container'>
                    <div class="round-image" style={{ zIndex: "1" }}>
                        <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                    </div>
                    <div class="round-image" style={{ marginLeft: "-1rem", zIndex: "3" }}>
                        <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                    </div>
                    <div className='round-text' style={{ marginLeft: "-1rem", zIndex: "2" }}>
                        <p>+40</p>
                    </div>
                </div>

                <div className='explore-content'>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione non magnam reprehenderit blanditiis sit provident quas exercitationem, nihil nemo ea quidem natus illum sequi qui facilis quod doloremque? Numquam.
                    </p>
                </div>
                <div className='explore-btn_content'>
                    <button className='primary_btn'>Let's explore</button>
                </div>
            </div>

            {/* <div class="survey-hub_card">
                <img src={'https://randomuser.me/api/portraits/men/20.jpg'} alt="Avatar" />
                <div class="survey-hub_card-content">
                    <h2 class="survey-hub_card-title">Card Title</h2>
                    <p class="survey-hub_card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget velit id nulla sodales fermentum a id libero.</p>
                    <div>
                        <p>Readmore</p>
                        <img src={TopArrow} alt='' width={10}/>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default AppreciationAwards;