import React from "react";
import "../styles/_common.scss";
import "../styles/_commonStyles.scss";
import "../styles/_appreciationAwards.scss";
import TopArrow from "../assests/Top-arrow.svg";
import AwardsMock from '../assests/Appreciation-and-Awards/awards-mock.svg';
import Kudos from '../assests/Appreciation-and-Awards/kudos.svg';
import AwardsIcon from '../assests/Appreciation-and-Awards/awards-icon.svg';
import KudosIcon from '../assests/Appreciation-and-Awards/kudos-icon.svg';

const AppreciationAwards = () => {
  return (
    <div className="appreciation_card" style={{ padding: "0" }}>
      <div className="awards-container">

        <div class="awards">
          <div className="awards-bg-img-container">
            <div className="awards-bg-img-content">
              <p className="font-medium">Super Star</p>
              <p className="font-bold">Edrain Walter, Edura Sinberg</p>
              <p className="font-medium">and</p>
              <p className="font-bold">40 others</p>
            </div>
          </div>
          <div className="awards-sub-container">
            <div className="awards-sub-header">
              <div>
                <button className="kudos-btn"><span><img src={KudosIcon} alt="" width={12} /></span> Kudos </button>
                <span className="kudos-btn-sub">Fri,05 Jan</span>
              </div>
              <img src={TopArrow} alt="" />
            </div>
            <div className="awards-sub-content">
              <p className="font-bold">Edrain Walter <span className="font-medium">and</span> 40 <span className="font-medium">others</span></p>
              <p className="appreciared-name">appreciated by <span className="font-bold">Mayers</span></p>
            </div>
            <div className="awards-sub-greeting ">
              <p>Big congratulations for their outstanding dedication and hard work! 🏆Your contributions and positive attitude make our team shine.
                <span className="hashtag">#EmployeeOfTheMonth #TeamworkSuccess 🎉</span></p>
            </div>
          </div>
        </div>

        <div class="awards">
          <div className="awards-mock-img-container">
            <div className="awards-mock-img-content">
              <p>Outstanding Employee Award</p>
              <p>Edrain Walter</p>
            </div>
          </div>
          <div className="awards-sub-container">
            <div className="awards-sub-header">
              <div>
                <button className="kudos-btn"><span><img src={AwardsIcon} alt="" width={12} /></span> Awards </button>
                <span className="kudos-btn-sub">Fri,05 Jan</span>
              </div>
              <img src={TopArrow} alt="" />
            </div>
            <div className="awards-sub-content">
              <p className="font-bold">Edrain Walter <span className="font-medium">and</span> 40 <span className="font-medium">others</span></p>
              <p className="appreciared-name">appreciated by <span className="font-bold">Mayers</span></p>
            </div>
            <div className="awards-sub-greeting ">
              <p>Big congratulations for their outstanding dedication and hard work! 🏆Your contributions and positive attitude make our team shine.
                <span className="hashtag">#EmployeeOfTheMonth #TeamworkSuccess 🎉</span></p>
            </div>
          </div>
        </div>

      </div>

      <div className="explore-card">
        <div className="explore-heading">
          <img src={TopArrow} alt="" />
        </div>
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
};

export default AppreciationAwards;
