import React from 'react';
import './stylec.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}><br/>
              <h1 className="p-heading1"  data-aos='zoom-in' data-aos-duration='3000' >Contact Me</h1>

              <p className="p-heading2"  data-aos='zoom-in' data-aos-duration='3000'>
            
              Thank You for checking out my Portfolio.  I'm currently available for freelance projects or full-time work.  If you have any questions, ideas, or projects please feel free to message me. 
              I am always open for discussion. You can contact me via the Contact Form <strong>OR</strong> simply click on the social
              media icon if you are more comfortable there. 
              Thank You again.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
               <SocialIcons /> 
            </Row>
    </div>
  );
}

export default Contact_Left;
