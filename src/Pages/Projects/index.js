import React, { Component } from "react";
import "../Projects/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";

import HamburgerMenu from "../../components/hamburger_menu";

import ProjectList from "../../components/projects";

class Projects extends Component {
  render() {
    return (
      <Container className="Project-header" fluid={true}>
        <Animate to="1" from="0" attributeName="opacity">
          <Row className="Projects-main"></Row>
          <Col xl={12} className="about-main">
            <ProjectList />
          </Col>
          <HamburgerMenu />
          <Row className="Projects-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default Projects;
