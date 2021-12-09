import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      
      <Row >
    
        <Col xl={12}>
        <SocialIcons /> 
        Designed/Built in {(new Date().getFullYear())} by <strong>Lonnie Mitchell</strong>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;
