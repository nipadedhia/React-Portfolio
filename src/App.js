import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div class="">
          <Route
            // exact
            // path={["/", "/about", "/react_portfolio"]}
            // component={HomePage}
            // exact
            // path={[`${process.env.PUBLIC_URL}/`, "/about", "/react_portfolio"]}
            // component={HomePage}
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={HomePage}
          />
          <Route exact path="/ProjectPage" component={ProjectPage} />
          <Route exact path="/ContactPage" component={ContactPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
