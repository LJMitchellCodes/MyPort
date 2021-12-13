import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
  FaGithubSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMaterialui,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiAngular,
  SiIonic,
  SiTypescript,
} from "react-icons/si";

function CV() {
  return (
    <div>
      <Row className="CV-text">
        <Col sm={12}>
          <h1
            className="section-title"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About Me
          </h1>

          <p
            className="p-heading2C"
            id="compress"
            data-aos="fade-down"
            data-aos-duration="3000"
          ><br/>
            Hello, My name is Lonnie. I am a US Navy Nuclear Electronics
            Technician Veteran and also a Certified Software Developer
            restarting where I left off from college before I enlisted. I’m
            interested in expanding beyond my academic background in the field
            of Software and Mobile applications. I have always had a passion for
            creating things for the internet. I am also a YouTube Content
            Creator where you can see some of my video work.
          </p>
          <br />

          <h1
            className="section-title"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Skills
          </h1>

          <div id="skills-icons" data-aos="zoom-in" data-aos-duration="3000">
            <icon className="html">
              <FaHtml5 />{" "}
            </icon>
            <icon className="css">
              {" "}
              <FaCss3 />{" "}
            </icon>
            <icon className="js">
              {" "}
              <SiJavascript />{" "}
            </icon>
            <icon className="type">
              {" "}
              <SiTypescript />{" "}
            </icon>
            <icon className="react">
              {" "}
              <FaReact />{" "}
            </icon>
            <icon className="npm">
              {" "}
              <SiAngular />{" "}
            </icon>
            <icon className="node">
              {" "}
              <FaNodeJs />{" "}
            </icon>
            <icon className="npm">
              {" "}
              <FaNpm />{" "}
            </icon>
            <br />
            <icon className="node">
              {" "}
              <SiMongodb />{" "}
            </icon>
            <icon className="mui">
              {" "}
              <SiMysql />{" "}
            </icon>
            <icon className="boot">
              {" "}
              <FaBootstrap />{" "}
            </icon>
            <icon className="mui">
              {" "}
              <SiMaterialui />{" "}
            </icon>
            <icon className="react">
              {" "}
              <FaGithubSquare />{" "}
            </icon>
            <icon className="npm">
              {" "}
              <FaGitAlt />{" "}
            </icon>
            <icon className="react">
              {" "}
              <SiIonic />{" "}
            </icon>
          </div>
          <br />

          <h1
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Education
          </h1><br/>
          <div data-aos="fade-up" data-aos-duration="3000">
            {/* <div className="p-heading2C"> */}
              {/* Coding Phase: Full Stack Software Developer */}
            {/* </div> */}
            <div className="p-heading2C">
              Woz U: Certified Full Stack Software Developer
            </div>
         
            <div className="p-heading2C">
              United States Naval Nuclear Power School
            </div>
            <div className="p-heading2C">
              United States Naval Nuclear Electronics Technician "A" School
            </div>
            <div className="p-heading2C">
              Texas A&I University: Mathematics/Computer Science{" "}
            </div>
            <div className="p-heading2C">Banquete ISD: 3rd in my class </div>
          </div><br/>
        </Col>
      </Row>

      <Row className="contact-left-footer"></Row>
    </div>
  );
}

export default CV;
