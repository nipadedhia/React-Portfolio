import React from "react";
import { Link } from "react-router-dom";
import myProfile from "./assets/myProfile.jpg";

function AboutMe(props) {
  return (
    <div ref={props.myRef} id="aboutMe" class="row container aboutMe mx-auto">
      <div class="col-lg-6">
        <img class="rndImg" src={myProfile} alt="profilePic" />
      </div>
      <div class="col-lg-6 text-center">
        <h2 class="pinkTxt">About Me</h2>
        <p class="">
          IT Quality Analyst with 6 years’ of direct experience in software
          manual testing. Analytic-thinker with full command on QA Processes.
          Experienced with Scaled Agile Framework (SAFe), Agile/Scrum &
          waterfall methodologies. Accomplished professional with very strong
          proficiency in performing testing for Bank applications, payroll
          operations, corporate monthly & quarterly filings & sales tax. Strong
          Microsoft Excel, Word and Access skills. High degree of
          professionalism with proven ability to deal delicately with
          confidential material.
        </p>
        <p>
          After completing a Full Stack Web Developer bootcamp at University of
          Kansas, I am now proficient in React, Javascript, Node.js, Express,
          HTML & CSS, among other programs, libraries and frameworks.
        </p>
        <div class="d-flex justify-content-center mt-4">
          <Link to={"/ProjectPage"}>
            <div class="myBtn text-center">SHOW PROJECT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
