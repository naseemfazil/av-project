import React from "react";
import TopArrow from "../assests/Top-arrow.svg";
import Forward from "../assests/Forward and Backward Icon.svg";
import GiveAward from "../assests/rewards_and_recognition/give_award.webp";
import GiveBadges from "../assests/rewards_and_recognition/give_badges.webp";
import GiveGift from "../assests/rewards_and_recognition/give_gift.webp";
import GiveGreeting from "../assests/rewards_and_recognition/give_greetings.webp";
import Kudos from "../assests/rewards_and_recognition/kudos.webp";
import "../styles/_rewardsRecognition.scss";
import Img from '../components/img';

const RewardsRecognition = () => {
  const rewardsRecognition = [
    {
      title: "Spread appreciation!",
      content:
        "Show your appreciation and give kudos for their outstanding contributions!",
      btnTxt: "Let's Appreciate!",
      bgImg: GiveAward,
    },

    {
      title: "Recognize achievements",
      content:
        "Recognize outstanding achievements and present an award to someone deserving !",
      btnTxt: "Give Award",
      bgImg: GiveBadges,
    },

    {
      title: "Acknowledge achievement!",
      content:
        "Reward achievements and distribute badges to acknowledge excellence !",
      btnTxt: "Give Badges",
      bgImg: GiveGift,
    },

    {
      title: "Spread Joy & Appreciation",
      content:
        "Make someone's day brighter with a thoughtful gift. Show your appreciation !",
      btnTxt: "Give Gift",
      bgImg: GiveGreeting,
    },

    {
      title: "Share your expertise ",
      content: "Contribute valuble insights and knowlege to our community",
      btnTxt: "Write Article",
      bgImg: Kudos,
    },
  ];
  return (
    <div className="occasions_card card" style={{minHeight: '61vh'}}>
      <div className="heading-row">
        <span>Rewards and recognition</span>
        <span>
          <Img src={Forward} alt=" " />
        </span>
      </div>
      <div className="rewards-recognition-container">
        {rewardsRecognition.map((eachDtls, index) => {
          return (
            <div
              className="child-card"
              style={{
                marginTop: "4px",
                backgroundImage: `url(${eachDtls.bgImg})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
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

export default RewardsRecognition;
