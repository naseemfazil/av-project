import React from "react";
import "../styles/_sideBar.scss";
// import socialHub from '../assests/Sliders/Social Hub.svg'
import Home from "../assests/Home.svg";
import SocialHub from "../assests/Social Hub.svg";
import ProjectOversight from "../assests/Project Oversight.svg";
import SurveyHub from "../assests/Survey Hub.svg";
import Groups from "../assests/Groups.svg";
import People from "../assests/People.svg";
import ExploreMore from "../assests/Explore More.svg";
import AdminConfig from "../assests/Admin Config.svg";
import Img from '../components/img';

import AppIcon from "../assests/Group 139.svg";
import leftIcon from "../assests/chevronLeft.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Img src={AppIcon} alt="" />
        <div className="sidebar-toggle">
          <Img src={leftIcon} alt="" />
        </div>
      </div>
      <div className="side-container">
        <ul>
          <li>
            <span>
              <Img src={Home} alt="" />
            </span>{" "}
            <p>Home</p>
          </li>
          <li>
            <span>
              <Img src={SocialHub} alt="" />
            </span>{" "}
            <p>Social Hub</p>
          </li>
          <li>
            <span>
              <Img src={ProjectOversight} alt="" />
            </span>{" "}
            <p>Project Oversight</p>
          </li>
          <li>
            <span>
              <Img src={SurveyHub} alt="" />
            </span>{" "}
            <p>Survey Hub</p>
          </li>
        </ul>
      </div>
      <div className="side-container_sub-container">
        <ul>
          <li>
            <span>
              <Img src={Groups} alt="" />
            </span>{" "}
            <p>Groups</p>
          </li>
          <li>
            <span>
              <Img src={People} alt="" />
            </span>{" "}
            <p>People</p>
          </li>
          <li>
            <span>
              <Img src={ExploreMore} alt="" />
            </span>{" "}
            <p>Explore More</p>
          </li>
          <li>
            <span>
              <Img src={AdminConfig} alt="" />
            </span>{" "}
            <p>Admin Config</p>
          </li>
        </ul>
      </div>
      <div className="side-bottom_container">
        <p className="ownerTxt">
          Powered By
          <p className="nextLvlTxt">NextLevel</p>
        </p>
        <p className="ownerSubTxt">Human Centric Platform</p>
      </div>
    </div>
  );
};

export default SideBar;
