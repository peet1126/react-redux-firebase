import React from "react";
import { Link } from "react-router-dom"

import headShot from "../../img/portfolio/headShot.jpg";
import html5 from "../../img/portfolio/html5.png";
import css3 from "../../img/portfolio/css3.png";
import js from "../../img/portfolio/js.png";
import react from "../../img/portfolio/react.png";
import graphql from "../../img/portfolio/graphql.png";
import sass from "../../img/portfolio/sass.png";
import materialize from "../../img/portfolio/materialize.png";
import bootstrap from "../../img/portfolio/bootstrap.png";
import webpack from "../../img/portfolio/webpack.png";
import sql from "../../img/portfolio/sql.png";
import git from "../../img/portfolio/git.png";
import firebase from "../../img/portfolio/firebase.png";
import crypto from "../../img/portfolio/crypto-loan-calculator.png";
import experimentZone from "../../img/portfolio/experiment-zone.png";
import wander from "../../img/portfolio/wander.png";
import memoryGame from "../../img/portfolio/memory-game.png";
import li from "../../img/portfolio/li.png";
import gitWhite from "../../img/portfolio/git-white.png";
import resume from "../../resources/Peter_McDonald_Resume.pdf"


const Portfolio = props => {    
    return (
        <div>
            <div className="hero-div">
                <div className="hero container valign-wrapper">
                    <div className="row">
                        <div className="col center-align">
                            <h1 className="green-text text-darken-2">Full-Stack Web Developer</h1>
                            <h5>with a passion for learning</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white">
                <div className="about container valign-wrapper">
                    <div className="about-row row valign-wrapper">
                        <div className="head-shot-div col s12 m5 l4">
                            <img className="head-shot responsive-img" src={headShot} alt="Head Shot" title="Head Shot" />
                            <h5 className="center-align" >Peter McDonald</h5>
                        </div>
                        <div className="col s12 m7 l7 offset-l1">
                            <h3>About Me</h3>
                            <p>I have more than two years work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.</p>
                            <p>On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.</p>
                            <p>In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.</p>
                            <p>Below is a list of my current technical skills:</p>
                            <br />
                            <div>
                                <div class="skills list-inline">
                                    <div className="row">
                                        <div className="col s2 l2 xl1 offset-xl3">
                                            <a href="https://en.wikipedia.org/wiki/html5" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={html5} alt="HTML5" title="HTML5" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={css3} alt="CSS3" title="CSS3" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={js} alt="JavaScript" title="JavaScript" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={react} alt="React" title="React" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={graphql} alt="GraphQL" title="GraphQL" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer"><img className="responsive-img" src={sass} alt="Sass" title="Sass" /></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s2 l2 xl1 offset-xl3">
                                            <a href="https://materializecss.com/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={materialize} alt="Materialize" title="Materialize" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={bootstrap} alt="Bootstrap" title="Bootstrap" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={webpack} alt="Webpack" title="Webpack" />
                                            </a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={sql} alt="SQL" title="SQL" /></a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={git} alt="Git" title="Git" />
                                            </a>
                                        </div>
                                        <div className="col s2 l2 xl1">
                                            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img className="responsive-img" src={firebase} alt="Firebase" title="Firebase" />
                                            </a>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio container">
                <h3 className="center-align">Portfolio</h3>
                <h5 className="center-align">Click on the image to demo the project.</h5>
                <div className="card-row row">
                    <div className="col s10 m6 l3 offset-s1">
                        <div class="card">
                            <div class="card-image">
                                <img src={crypto} />
                            </div>
                            <div class="card-content">
                                <span class="card-title">Crypto Calculator</span>
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="col s10 m6 l3 offset-s1">
                        <a href="https://experimentzone.com/cro-calculator/" target="blank" rel="noreferrer noopener">
                            <div class="card">
                                <div class="card-image">
                                    <img src={experimentZone} />
                                </div>
                                <div class="card-content">
                                    <span class="card-title">Client's Website</span>
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>                        
                        </a>
                    </div>
                    <div className="col s10 m6 l3 offset-s1">
                        <Link to="/">
                            <div class="card">
                                <div class="card-image">
                                    <img src={wander} />
                                </div>
                                <div class="card-content">
                                    <span class="card-title">Wander</span>
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>                        
                        </Link>
                    </div>
                    <div className="col s10 m6 l3 offset-s1">
                        <div class="card">
                            <div class="card-image">
                                <img src={memoryGame} />
                            </div>
                            <div class="card-content">
                                <span class="card-title">Memory Game</span>
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="contact container">
                <h3 className="center-align">Contact Me</h3>
                <br />
                <div className="row center-align">
                    <div className="col s6 m4  center-align">
                        <a id="contact-circle" class="btn-floating btn-large waves-effect waves-light red" href="mailto:pbmcdonald7@gmail.com" target="_blank"><i id="contact-icon" class="material-icons">mail_outline</i></a>
                        <a href="mailto:pbmcdonald7@gmail.com" target="_blank" rel="noreferrer noopener"><p className="center-align">pbmcdonald7@gmail.com</p></a>
                    </div>
                    <div className="col s6 m4 center-align">
                        <a id="contact-circle" class="btn-floating btn-large waves-effect waves-light red" href="tel:+15129681494" target="_blank" rel="noreferrer noopener"><i id="contact-icon" class="material-icons">phone_iphone</i></a>
                        <a href="tel:+15129681494" target="_blank" rel="noreferrer noopener"><p className="center-align">(512) 968-1494</p></a>
                    </div>
                    <div className="col s6 m4 center-align">
                        <a id="contact-circle" class="btn-floating btn-large waves-effect waves-light red" href="https://www.linkedin.com/in/peterbarkermcdonald/" target="_blank" rel="noreferrer noopener"><img class="li-icon" src={li} alt="LinkedIn Icon" /></a>
                        <a href="https://www.linkedin.com/in/peterbarkermcdonald/" target="_blank" rel="noreferrer noopener"><p className="center-align">View Profile</p></a>
                    </div>
                    <div className="col s6 m4 center-align offset-m2">
                        <a id="contact-circle" class="btn-floating btn-large waves-effect waves-light red" href="https://github.com/peet1126" target="_blank" rel="noreferrer noopener"><img class="li-icon" src={gitWhite} alt="Github Icon" /></a>
                        <a href="https://github.com/peet1126" target="_blank" rel="noreferrer noopener"><p className="center-align">View Profile</p></a>
                    </div>
                    <div className="col s6 m4 center-align offset-s3">
                        <a id="contact-circle" class="btn-floating btn-large waves-effect waves-light red" href={resume} target="_blank" rel="noreferrer noopener"><i id="contact-icon" class="material-icons">description</i></a>
                        <a href={resume} target="_blank" rel="noreferrer noopener"><p className="center-align">View Resume</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;