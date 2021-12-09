import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Loading from "../Pages/Loading/spinner";
import Project from "../Pages/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Loading} />

        <Route path="/Home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Project" component={Project} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}
