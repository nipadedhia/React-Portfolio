import React from "react";
import weatherImg from "./assets/WeatherApp.PNG";
import groupImg from "./assets/43069.jpg";
import foodImg from "./assets/Quarantine-Meals.PNG";
import writeItOut from "./assets/Write-It-Out.png";
import burgerImg from "./assets/Eat-Da-Burger.PNG";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectPage() {
  return (
    <div>
      <div class="bodyContained">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div class="row container mx-auto myBox">
            <div class="col-lg-6">
              <img
                src={writeItOut}
                alt="Write It Out app"
                style={{ width: "100%" }}
              />
            </div>
            <div class="col-lg-6 text-center pt-4">
              <h2 class="mt-3 mb-4">Write-It-Out</h2>
              <p>
                This application was created for a user that wants to make blog
                posts or journal entries, and have them render onto a reader
                page. This is like a personal memoir creater, and brings the
                user back to the days when people kept journals, and these
                memories can be shared now, or later on in life. The user will
                also have a login with a username and password, which will be
                secure and protected using Passport.js. This full-stack
                application was created using Javascript, JQuery, Bootstrap,
                Node.js, along with packages such as: Express, Handlebars,
                Passport, MySQL and Sequelize for the database.
              </p>
              <div class="d-flex justify-content-center mt-4">
                <a
                  class="myBtn text-center"
                  href="https://write-it-out.herokuapp.com/">
                  LIVE DEMO
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div class="row container mx-auto myBox">
            <div class="col-lg-6 text-center pt-4">
              <h2 class="mt-3 mb-4">Fitness Tracker</h2>
              <p>
                A fitness app that allows the user to view, create, and track
                daily workouts. The user is able to log multiple exercises in a
                given day and also go back and update the workout. The user is
                able to track the name, type, weight, sets, reps and duration of
                each exercise. Cardiovascular exercises show the distance
                traveled in miles.
              </p>
              <div class="d-flex justify-content-center mt-4">
                <a
                  class="myBtn text-center"
                  href="https://hidden-thicket-66831.herokuapp.com/?id=5f09fa2dff5cfc0017be01bc">
                  LIVE DEMO
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <img src={groupImg} alt="Fitness app" />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div class="row container mx-auto myBox">
            <div class="col-lg-6">
              <img src={burgerImg} alt="Eat Da Burger app" />
            </div>
            <div class="col-lg-6 text-center pt-4">
              <h2 class="mt-3 mb-4">Eat Da Burger</h2>
              <p>
                This app allows the user to create and "eat" burgers using
                MySQL, Node, Express, Handlebars and ORM. The user can enter a
                burger into the text box and that burger will then appear in a
                list of available burgers. The user can then "eat" the burger
                which sends it into a list of "devoured burgers". Lastly, the
                burger can be fully deleted from the app
              </p>
              <div class="d-flex justify-content-center mt-4">
                <a
                  class="myBtn text-center"
                  href="https://vast-ocean-18277.herokuapp.com/">
                  LIVE DEMO
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div class="row container mx-auto myBox">
          <div class="col-lg-6">
            <img src={foodImg} alt="Quarantine-Meals app" />
          </div>
          <div class="col-lg-6 text-center pt-4">
            <h2 class="mt-3 mb-4">Quarantine-Meals</h2>
            <p>
              With everyone being held indoors, we are becoming more dependent
              on cooking with what we have around the house. Especially if we
              didn’t get to make it out to the store before everyone else bought
              up all the supplies. So what is one to do with what they have?
              This is where Quarantine meals comes in to play. Quarantine meals
              allows a user to type in ingredients they have on hand and gives
              them recipes to work with. Missing ingredients to make that
              recipe? Try our substitutions, this allows you to type in an
              ingredient you need but don’t have and gives you some alternate
              choices. We’ve also included Keto searches for those that are
              looking for Keto alternative recipes!
            </p>
            <div class="d-flex justify-content-center mt-4">
              <a
                class="myBtn text-center"
                href="https://nipadedhia.github.io/Quarantine-Meals/">
                LIVE DEMO
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div class="row container mx-auto myBox">
          <div class="col-lg-6">
            <img src={weatherImg} alt="Weather app" />
          </div>
          <div class="col-lg-6 text-center pt-4">
            <h2 class="mt-3 mb-4">Weather Dashboard</h2>
            <p>
              A simple web-app that allows you to search for a city and get the
              current weather and 5 day forecast.Displays date, temperature,
              humidity, wind speed, and UV index for current day. For 5 days, it
              displays date, temperature and humidity. It also saves selected
              cities previously searched and displays in left nav for ease of
              access. When the app is opened next time, it automatically loads
              data for the last city looked at. This app is using APIs from
              "Open Weather Map" for retrieving weather data. Using "Current
              Weather data" API for the current day weather data. Using "One
              Call API" for UV Index and 5 day weather data.
            </p>
            <div class="d-flex justify-content-center mt-4">
              <a
                class="myBtn text-center"
                href="https://nipadedhia.github.io/WeatherApp/">
                LIVE DEMO
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default ProjectPage;
