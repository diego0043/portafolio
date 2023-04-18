import React from "react";
import { HomeAnimation } from "./HomeAnimation";
import img from "../assets/Frame.png";

export const HomeContainer = () => {
  return (
    <>
      <div className="row container-fluid home">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 animate__animated animate__fadeInLeft container-fluid container-text-home">
          <div className="row">
            <span>Wellcome! I´M</span>
          </div>
          <div className="row mt-2">
            <h1>DIEGO VALENCIA</h1>
          </div>
          <div className="row mt-2">
            <span>Systems engineer & Web developer</span>
          </div>
          <div className="row mt-3 text-p-home">
            <p>
              I am a systems engineer and web developer, I have experience in
              front-end development, I am passionate about technology and
              programming, I am always learning new things and I am always
              looking for new challenges.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 animate__animated animate__fadeInRight container-animation">
          {/* <HomeAnimation /> */}
          <img className="img-home" src={img} alt="" />
        </div>
      </div>
    </>
  );
};
