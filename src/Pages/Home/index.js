import React from "react";

import "./style.css";

import HomeLeft from "../../components/homeleft";

import Footer from "../../components/footer";
import { Container, Row, Col } from "react-bootstrap";

import Video from "../../assets/video/sea and moon.mp4";

function Home() {
  return (
    <div className="hero">
      <video src={Video} autoPlay loop muted />

      <Container className="App-header" fluid={true}>
        <Row className="App-main">
          <Col xl={8} className="App-left">
            <HomeLeft />
          </Col>
        </Row>
        <Row className="App-footer">
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
