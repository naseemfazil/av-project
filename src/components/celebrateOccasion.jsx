import React from "react";
import "../styles/_common.scss";
import "../styles/_commonStyles.scss";
import "../styles/_celebrateOccasion.scss";
import Forward from "../assests/Forward and Backward Icon.svg";
import TopArrow from "../assests/Top-arrow.svg";
import CelebrateBirthday from "../assests/celebrate_an_occasion/celebrate_birthday.webp";
import Certification from "../assests/celebrate_an_occasion/new_certification.webp";
import Education from "../assests/celebrate_an_occasion/new_education.webp";
import Position from "../assests/celebrate_an_occasion/new_position.webp";
import ProjectLaunch from "../assests/celebrate_an_occasion/project_launch.webp";
import WelcomeTeam from "../assests/celebrate_an_occasion/welcome_to_the_team.webp";
import WorkAnniversary from "../assests/celebrate_an_occasion/work_anniversary.webp";
import Img from '../components/img';

const CelebrateOccasion = () => {
  const celebrateOccasionDtls = [
    {
      title: "Celebrate Birthday",
      content:
        "Let's come together to celebrate and make their day extra special.",
      btnTxt: "Let's Celebrate!",
      bgImg: CelebrateBirthday,
    },

    {
      title: "Celebrate a milestone!",
      content:
        "Show your appreciation for their dedication on this work anniversary!",
      btnTxt: "Let's celebrate!",
      bgImg: WorkAnniversary,
    },

    {
      title: "welcome to our team",
      content:
        "A new member has joined the team. Would you like to welcome them?",
      btnTxt: "Let's Welcome!",
      bgImg: WelcomeTeam,
    },

    {
      title: "Announce New Position",
      content:
        "Ready to share your exciting new role with the community? Let's do it!",
      btnTxt: "Let's announce!",
      bgImg: Position,
    },

    {
      title: "Share your expertise ",
      content: "Contribute valuble insights and knowlege to our community",
      btnTxt: "Write Article",
      bgImg: Position,
    },
  ];
  return (
    <div className="occasions_card card">
      <div className="heading-row">
        <span>Celebrate an Occasion</span>
        <span>
          <Img src={Forward} alt=" " />
        </span>
      </div>
      <div className="celebrate-occasion-container">
        {celebrateOccasionDtls.map((eachDtls, index) => {
          return (
            <div
              className="child-card"
              style={{
                marginTop: "4px",
                backgroundImage: `url(${eachDtls.bgImg})`,
                backgroundSize:'cover'
              }}
            >
              <div className="child-heading-row">
                <span>
                  <Img src={TopArrow} alt="" />
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
};

export default CelebrateOccasion;
