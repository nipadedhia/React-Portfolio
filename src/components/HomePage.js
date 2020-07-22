import React, { useRef } from "react";
import AboutMe from "./AboutMe";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function HomePage() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div>
      <div class="jumbotron jumbotron-fluid hero">
        <div class="container hero1">
          <div class="heroContext text-left">
            <h1 class="display-4 heroHead">NIPA DEDHIA</h1>
            <div class="d-flex justify-content-start mt-4">
              <p class="heroSubTxt">A Full Stack Web Developer.</p>
            </div>
            <div class="d-flex justify-content-start mt-4">
              <div class="myBtn text-center" onClick={executeScroll}>
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe myRef={myRef} />
    </div>
  );
}

export default HomePage;
