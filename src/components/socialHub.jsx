import React from "react";
import "../styles/_socialHub.scss";
import "../styles/_common.scss";
import "../styles/_commonStyles.scss";
import TopArrow from "../assests/Top-arrow.svg";
import Forward from "../assests/Forward and Backward Icon.svg";
import SocialHubBg from "../assests/social-hub/Social_Hub_Post.webp";

import Question from "../assests/social-hub/Social_Hub_Question.webp";
import Announment from "../assests/social-hub/Social_Hub_Announcement.webp";
import Article from "../assests/social-hub/Social_Hub_Article.webp";
import Blog from "../assests/social-hub/Social_Hub_Blog.webp";
import World from "../assests/Privacy - Public Icon.svg";
import FutureProfile from '../assests/future-ai-profile.jpg';
import Img from '../components/img';

const SocialHub = () => {
  const socialHubDetails = [
    {
      title: "Post your thoghts",
      content:
        "Feel like sharing somethings? Share your thoughts, idea, or updates with the community.",
      btnTxt: "Create post",
      bgImg: SocialHubBg,
    },

    {
      title: "Having  questions?",
      content:
        "Having a questions in mind? Ask the community& get answers from fellow members!",
      btnTxt: "Ask Questions",
      bgImg: Question,
    },

    {
      title: "Share important news",
      content:
        "Create a new annoucement and keep our communtiy informed and engaged!",
      btnTxt: "Announcement",
      bgImg: Announment,
    },

    {
      title: "Share your expertise ",
      content: "Contribute valuble insights and knowlege to our community",
      btnTxt: "Write Article",
      bgImg: Article,
    },

    {
      title: "Share your expertise ",
      content: "Contribute valuble insights and knowlege to our community",
      btnTxt: "Write Article",
      bgImg: Blog,
    },
  ];
  return (
    <>
      <div className="social-hub card">
        <div className="heading-row">
          <span>Social Hub</span>
          <span>
            <Img src={Forward} alt=" " />
          </span>
        </div>
        <div className="social-hub_container">
          {socialHubDetails.map((eachDtls, index) => {
            return (
              <div
                className="child-card"
                style={{
                  marginTop: "4px",
                  backgroundImage: `url(${eachDtls.bgImg})`,
                  backgroundSize: "cover",
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

      {/* Future AI card */}
      <div className="future-ai_card">
        <div className="circular-image-container feature_userIcon">
        {/* <p>icon</p> */}
          <Img
            className="circular-image"
            src={FutureProfile}
            alt="Avatar"
          />
        </div>
        <div className="future-ai_container">
          <div className="future-ai_header">
            <div className="future-ai_title">
              <p className="title_txt">
                The Future is AI
                <span style={{ color: "#ccc" }}>.</span>
              </p>
              <Img className="future-ai_title_world_image" src={World} alt="" />
            </div>
            <div className="GrpImage_FollowersTxtDiv">
              <div className="future-round-image_container">
                <div class="social firstImage">
                  <Img
                    className="facebook"
                    src={"https://randomuser.me/api/portraits/men/20.jpg"}
                    alt="Avatar"
                  />
                </div>
                <div class="social secondImage">
                  <Img
                    className="facebook"
                    src={"https://randomuser.me/api/portraits/men/20.jpg"}
                    alt="Avatar"
                  />
                </div>
                <div class="social thirdImage">
                  <Img
                    className="facebook"
                    src={"https://randomuser.me/api/portraits/men/20.jpg"}
                    alt="Avatar"
                  />
                </div>
              </div>
              <p>1.4k Members</p>
            </div>
          </div>
          <p className="future-ai_content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            rerum mollitia tenetur, enim, vero beatae molestiae nulla officiis
            ipsam facilis, quia ab illo commodi? Quibusdam numquam officiis quo
            provident? Sit? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quidem rerum mollitia tenetur, enim, vero beatae molestiae
            nulla officiis ipsam facilis, quia ab illo commodi? Quibusdam
            numquam officiis quo provident? Sit? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quidem rerum mollitia tenetur, enim,
            vero beatae molestiae nulla officiis ipsam facilis, quia ab illo
            commodi? Quibusdam numquam officiis quo provident? Sit?
          </p>
          <p className="underline-text">Readmore</p>
          <div className="future-ai_btn">
            <button className="primary_btn">Accept Invite</button>
            <button className="secondary_btn">Not interested</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialHub;
