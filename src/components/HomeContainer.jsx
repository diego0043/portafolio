import React from "react";
import img from "../assets/Frame.png";
import cv from "../cv/currículo-diego.valencia.pdf";

export const HomeContainer = () => {
  return (
    <>
      <div className="row container-fluid home">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 animate__animated animate__fadeInLeft container-fluid container-text-home">
          <div className="row mt-2 content">
            <h2 className="text-title-home">DIEGO</h2>
            <h2 className="text-title-home">DIEGO</h2>
          </div>
          <div className="row content content-2">
            <h2 className="text-title-home">VALENCIA</h2>
            <h2 className="text-title-home">VALENCIA</h2>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 animate__animated animate__fadeInRight container-animation d-block d-lg-none d-md-none d-xl-none">
            <img className="img-home" src={img} alt="" />
          </div>
          <div className="row text-p-home">
            <p>
              Hello👋, I´ am a systems engineer and web developer, I have
              experience in front-end development and QA, I am passionate about
              technology and programming, I am always learning new things and I
              am always looking for new challenges.
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <a href={cv} download>
                <button className="btn-home-description">Download CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 animate__animated animate__fadeInRight container-animation d-none d-lg-block d-md-block d-xl-block">
          <img className="img-home" src={img} alt="" />
        </div>
      </div>
    </>
  );
};
