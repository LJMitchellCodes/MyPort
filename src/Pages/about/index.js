import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import CV from '../../components/about';
import Animate from 'react-smooth';




import HamburgerMenu from '../../components/hamburger_menu';

class About extends Component {

  
  render() {
    return (
        <Container className="About-header" fluid={true}>
         
            <Animate to="1" from="0" attributeName="opacity"> 
           
           
          
           <Row className="About-main">
              <HamburgerMenu />
                <CV/>  
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
            </Animate>  
       </Container>
    );
  }
}

export default About;
