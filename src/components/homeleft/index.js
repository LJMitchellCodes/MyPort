import React from "react";
import "./styleh.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-reveal";
// import { FaDesktop, FaBookOpen, FaPaperPlane } from "react-icons/fa";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1
            className="first-line"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            Hello, my name is
          </h1>
          <h2
            className="second_line"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <strong>Lonnie Mitchell</strong>
          </h2>
          <h2>
            <ReactTypingEffect
              text="Web Developer / Content Creator / YouTuber"
              className="typical"
              speed="100"
              eraseDelay="500"
            />
          </h2>

          <Fade bottom duration={2000}>
            <ul className="social">
              <a href="/project">
                <button className="home-left-aboutme">
               
                  Projects
                </button>
              </a>
              <br />
              <a href="/about">
                <button className="home-left-aboutme">
                
                  About Me
                </button>
              </a>
              <br />
              <a href="/contact">
                <button to="/contact" className="home-left-aboutme">
                  {" "}
                 
                  Connect With Me
                </button>
              </a>
            </ul>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
