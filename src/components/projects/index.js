import React from "react";

import "./stylep.css";
// import { FaGithub, FaGlobeAmericas } from "react-icons/fa";


import {
  
  SiGithub
} from "react-icons/si";


import{

  FiLink
} from "react-icons/fi";

//import stock
import stock from "../../assets/img/gp2.webp";
import stock1 from "../../assets/img/port1.webp";
import stock2 from "../../assets/img/githubsearch1a.png";
import stock3 from "../../assets/img/ElonMusk.webp";
import stock4 from "../../assets/img/gym1.webp";
import stock5 from "../../assets/img/simpleajaxgithub.webp";

class Projects extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <br />
        <h1
          className="section-title"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          My Projects
        </h1>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div><h3>This is an E-commerce Site</h3> </div>
                    <div className="col-sm-6">
                      <h4>Dragazon </h4>
                      <div className="w-more">
                        <h6>MERN Stack React-Bootstrap </h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/debuggin-dragons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <SiGithub /> Source Code{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://dragazon.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              <FiLink /> Live Demo
                            </h5>{" "}
                          </button>
                        </a>

                       




                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock1} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                  <div><h3>My Portfolio combining several interests.</h3> </div>
                    <div className="col-sm-6">
                      <h4>My Portfolio</h4>

                      <div className="w-more">
                        <h6 className="w-ctegory">React CSS3 Bootstrap</h6>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/MyPort"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <SiGithub /> Source Code{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          // href=""
                          // target="_blank"
                          // rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              <FiLink /> Live Demo
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          
        
        <h3
          className="section-title"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Other Projects
        </h3>
        <p></p><br/>
       





            {/* 
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 className="w-title">YouTube Search</h2>
                      <div className="w-more">
                        <h6 className="w-ctegory">ReactJS CSS3 YouTubeAPI</h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/210-Extreme-Fitness"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <FaGithub /> GitHub{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/210-Extreme-Fitness/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              <FaGlobeAmericas /> Live View
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4"> 
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 className="w-title">Elon Musk Tweets</h2>
                      <div className="w-more">
                        <h6 className="w-ctegory">
                          HTML, CSS, Twitter Publish
                        </h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/210-Extreme-Fitness"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <FaGithub /> GitHub{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/210-Extreme-Fitness/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              <FaGlobeAmericas /> Live View
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div> */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock4} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 className="w-title">Custom Gym Template</h2>
                      <div className="w-more">
                        <h6 className="w-ctegory">HTML5, CSS3, JS </h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/210-Extreme-Fitness"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <SiGithub /> Source Code{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/210-Extreme-Fitness/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              <FiLink /> Live Demo
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <div className="col-md-4"> 
              <div className="work-box">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>My Portfolio</h4>

                      <div className="w-more">
                        <h6 className="w-ctegory">HTML5, CSS3, JS, FLEXBOX</h6>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/210-Extreme-Fitness"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            {/* <FaGithub /> GitHub{" "} */}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/210-Extreme-Fitness/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              {/* <FaGlobeAmericas /> Live View */}
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  </div> 

            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock3} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 className="w-title">Elon Musk Tweets</h2>
                      <div className="w-more">
                        <h6 className="w-ctegory">HTML CSS Twitter Publish</h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/Tweets"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <SiGithub /> GitHub{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/Tweets/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              {/* <FaGlobeAmericas /> Live View */}
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>Simple Project Portfolio</h4>

                      <div className="w-more">
                        <h6 className="w-ctegory">HTML CSS JS JQuery Ajax</h6>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <a
                        href="https://github.com/LJMitchellCodes/L10HandsOn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <h5>
                            {" "}
                            <SiGithub /> GitHub{" "}
                          </h5>
                        </button>
                      </a>
                      <div className="w-more">
                        <a
                          href="https://ljmitchellcodes.github.io/L10HandsOn/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h5>
                              {/* <FaGlobeAmericas /> Live View */}
                            </h5>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
