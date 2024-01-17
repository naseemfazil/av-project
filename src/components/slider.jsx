import React from "react";
import "../styles/_slider.scss";
import "../styles/_commonStyles.scss";
import Survey from "../assests/Sliders/Survey.svg";
import projectManagemrnt from "../assests/Sliders/Project Management.svg";
import socialHub from "../assests/Sliders/Social-Hub.svg";
import kudos from "../assests/Sliders/Kudos.svg";
import rewards from "../assests/Sliders/Rewards.svg";
import awards from "../assests/Sliders/Awards.svg";
import voiceZone from "../assests/Sliders/Voice-zone.svg";
import celebrations from "../assests/Sliders/Celebrations.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const sliderDetails = [
    {
      title: "Social Hub",
      content:
        " Feel like sharing something? Share your thoughts, ideas, or updates with the community.",
      btnName: "Lets Explore!",
      bgImg: socialHub,
    },
    {
      title: "Kudos",
      content:
        "Show your appreciation and give kudos for their outstanding contributions!",
      btnName: "Lets Appreciate!",
      bgImg: kudos,
    },
    {
      title: "Rewards",
      content:
        "Elevate your achievements and experiences with exciting rewards on your journey",
      btnName: "Lets Appreciate!",
      bgImg: rewards,
    },
    {
      title: "Awards",
      content:
        "Acknowledge outstanding accomplishments with prestigious awards and recognition.",
      btnName: "Lets Appreciate!",
      bgImg: awards,
    },
    {
      title: "Voice Zone",
      content:
        "Engage in lively conversations and share your thoughts in the vibrant Voice Zone community.",
      btnName: "Lets Explore!",
      bgImg: voiceZone,
    },
    {
      title: "Celebrations",
      content:
        "Join the festivity and commemorate special occasions with joyous celebrations.",
      btnName: "Lets Celebrate!",
      bgImg: celebrations,
    },
    {
      title: "Survey",
      content:
        "Share and contribute to valuable information in our community survey..",
      btnName: "Lets Explore!",
      bgImg: Survey,
    },
    {
      title: "Project Management",
      content:
        "Show your appreciation and give kudos for their outstanding contributions!",
      btnName: "Lets Appreciate",
      bgImg: projectManagemrnt,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div
        id="carouselExampleInterval"
        class="carousel slide caroulse_inner_style"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner bgColor">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="row_container">
              <div className="kudos-received">
                <div>
                  <div className="round-image_container">
                    <div class="round-image" style={{ zIndex: "1" }}>
                      <img
                        src={"https://randomuser.me/api/portraits/men/20.jpg"}
                        alt="Avatar"
                      />
                    </div>
                    <div
                      class="round-image"
                      style={{ marginLeft: "-1rem", zIndex: "3" }}
                    >
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
                <div className="kr-names">
                  Alfie Solomon(You){" "}
                  <span style={{ fontWeight: "400" }}>and</span> 40 others
                </div>
                <div className="font-medium">
                  Received Kudos from
                  <span className="font-bold">Michael Mayers</span>
                </div>
                <div className="kr-content font-medium">
                  Big congratulations for their outstanding dedication and hard
                  work! 🏆Your contributions and positive attitude make our team
                  shine.
                </div>
                <div className="hashtags">#SpreadJoy #Kudos</div>
              </div>
              <div
                className="d-flex carosule-specific-first-item"
                style={{ backgroundImage: `url(${sliderDetails[0].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[0].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[0].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[0].btnName ?? ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="row_container">
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[1].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[1].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[1].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[1].btnName ?? ""}
                  </button>
                </div>
              </div>
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[2].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[2].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[2].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[2].btnName ?? ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="row_container">
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[3].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[3].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[3].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[3].btnName ?? ""}
                  </button>
                </div>
              </div>
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[4].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[4].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[4].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[4].btnName ?? ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="row_container">
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[5].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[5].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[5].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[5].btnName ?? ""}
                  </button>
                </div>
              </div>
              <div
                className="d-flex carosule-specific-item"
                style={{ backgroundImage: `url(${sliderDetails[6].bgImg})` }}
              >
                <div className="heading">
                  <h2>{sliderDetails[6].title ?? ""}</h2>
                </div>
                <div className="text-content">
                  {sliderDetails[6].content ?? ""}
                </div>
                <div className="button">
                  <button className="primary_btn">
                    {sliderDetails[6].btnName ?? ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-indicators indicators_button">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
