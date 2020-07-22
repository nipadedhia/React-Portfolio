import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import img from "./assets/Contact-Me1.jpg";
function ContactPage() {
  const imgStyle = { width: "100%", height: "80vh", objectFit: "cover" };
  return (
    <div>
      <div class="bodyContained">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div class="container myBox">
            <div class="row mx-auto myMy ">
              <img class="col-lg-6" src={img} alt="app" style={imgStyle} />
              <div class="col-lg-6 text-center contactMe">
                <h2 class="mt-2">Contact Me</h2>
                <form class="card-body mt-2">
                  <div class="form-group text-left">
                    <label for="fullName">Enter your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="form-group  text-left">
                    <label for="emailAddress">Enter your Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="emailAddress"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div class="form-group text-left">
                    <label for="message">Enter your Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="3"></textarea>
                  </div>
                  <div class="d-flex justify-content-center mt-5">
                    <div class="myBtn text-center">SUBMIT</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div class="d-flex justify-content-center mt-5 container socialBar">
          <a
            class="socialLinks text-center"
            href="https://www.linkedin.com/in/nipa-dedhia">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a
            class="socialLinks text-center"
            href="https://github.com/nipadedhia">
            <i class="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
