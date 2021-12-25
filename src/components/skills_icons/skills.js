import React from 'react';
import '../skills_icons/stylesk.css';
import {
 Col,
} from 'react-bootstrap';
import { FaDesktop, FaBookOpen, FaPaperPlane } from 'react-icons/fa';


function SkillsIcons() {
    return (
           <Col xl={12} className="skills-icons">
            &nbsp; &nbsp; &nbsp; &nbsp;
           <FaDesktop/><FaBookOpen/><FaPaperPlane/>
            
           </Col>
    );
  }
  
  export default SkillsIcons;