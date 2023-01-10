
import React, { useState } from 'react';
import '../css/navbar.css'
/*

TODO:

Show Navbbar only after scroll
Hide navbar when scroll up

*/
export default function Header() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [expandMobile, changeExpandMobile] = useState(false);

  return (
    <>
     <div>
        <div className="navbarspacer">        
          
        </div>
        <div className="navbarwrapper">
          <div className="regwrapper">
            <div className="shownwrapper">
                <div className="logowrapper" onClick={() => window.location.href="/"}>
                  <img className="logo" src={require('../assets/logo/logoNoBG.png')} alt="logo" />
                </div>

                <div className="middlespacer"></div>
                <div className="linkwrapper">
                  <div className="headeritem" id="solutionswrapper">
                    Solutions
                    <div className="dropdownwrapper">
                      <div className="dropdownitem" onClick={() => window.location.href="/Solutions/ParkinSense"}>
                        <p className="subheadingEx1">ParkinSense</p>
                        <span className="subheading3">World's first rapid, accurate, and fully contactless Parkinson's Disease Diagnosis</span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Solutions/ParkEnd"}>
                        <p className="subheadingEx1">ParkEnd</p>
                        <span className="subheading3">Novel approach to contactless Parkinson's Disease Tremor Treatment. </span>
                      </div>
                    </div>
                  </div>
                  <div className="headeritem">
                    <a href="/News" className="navlink">News</a>
                  </div>
                  <div className="headeritem" id="researchdropdown">
                    Research
                    <div className="dropdownwrapper">
                      <div className="dropdownitem" onClick={() => window.location.href="/Projects"}>
                          <p className="subheadingEx1">Current Projects</p>
                          <span className="subheading3">Read about our current projects.</span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Publications"}>
                          <p className="subheadingEx1">Publications</p>
                          <span className="subheading3">View our published research, articles, and conference discussions. </span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/NJAN"}>
                          <p className="subheadingEx1">NJAN</p>
                          <span className="subheading3">Submit your research to the Neurose Journal of Applied Neuroscience</span>
                      </div>
                    </div>
                  </div>
                  <div className="headeritem">
                    <a href="https://measure.parkin-sense.pulkith.com" className="navlink">Join our Study</a>
                  </div>
                  <div className="headeritem" id="aboutusdropdown">
                    Company
                    <div className="dropdownwrapper">
                      <div className="dropdownitem" onClick={() => window.location.href="/About"}>
                        <p className="subheadingEx1">About Us</p>
                        <span className="subheading3">Learn more about our history, mission, and goals.</span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Team"}>
                        <p className="subheadingEx1">Our Team</p>
                        <span className="subheading3">Learn about our team and leadership with industry-leading experience </span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Join"}>
                        <p className="subheadingEx1">Join Us</p>
                        <span className="subheading3">Join our team of leaders, researchers, and engineers, and learn about our benifits.</span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Partners"}>
                        <p className="subheadingEx1">Partners</p>
                        <span className="subheading3">Driving success with industry-leading partners at the world's top research institutions. </span>
                      </div>
                      <div className="dropdownitem" onClick={() => window.location.href="/Recognition"}>
                        <p className="subheadingEx1">Recognition</p>
                        <span className="subheading3">View our Recognition in the press and the awards Neurose has won.</span>
                      </div>
                    </div>
                  </div>
                  <div className="headeritem">
                    <a href="/Contact" className="navlink">Contact Us</a>
                  </div>
                </div>
                <div className="mobiledropdown" style={{
                  opacity: !expandMobile ? "0" : "1",
                  marginTop: !expandMobile ? "-10vh" : "0",
                  transition: "all 0.2s ease-in-out",
                  visibility: !expandMobile ? "hidden" : "visible",
                }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="xbutwrapwrapepr">
                        <div className="xbuttonwrapper" onClick={()=>{changeExpandMobile(false)}}>
                          <svg width="8" height="8" viewBox="0 0 12 12"><rect width="15.3125" height="1.48871" transform="matrix(0.701055 -0.713108 0.701055 0.713108 0 10.9385)" fill="#fff"></rect><rect width="15.3125" height="1.48871" transform="matrix(0.701055 0.713108 -0.701055 0.713108 1.26514 0)" fill="#fff"></rect></svg>
                        </div>
                      </div>
                    </div>

                    
                    <div className="col-12 section">
                      <div className="sectionheader">Solutions</div>
                      <div className="row">
                        <div className="col-6 sectionitem"><a href="/Solutions/ParkinSense" className="sectionlink">ParkinSense</a></div>
                        <div className="col-6 sectionitem"><a href="/Solutions/ParkEnd" className="sectionlink">ParkEnd</a></div>
                      </div>
                      <div className="sectiondivider"></div>
                    </div>
                    <div className="col-12 section">
                      <div className="sectionheader">News</div>
                      <div className="row">
                        <div className="col-6 sectionitem"><a href="/News" className="sectionlink">Recent News</a></div>
                      </div>
                      <div className="sectiondivider"></div>
                    </div>
                    <div className="col-12 section">
                      <div className="sectionheader">Research</div>
                      <div className="row">
                        <div className="col-6 sectionitem"><a href="/Projects" className="sectionlink">Current Projects</a></div>
                        <div className="col-6 sectionitem"><a href="/Publications" className="sectionlink">Publications</a></div>
                        <div className="col-6 sectionitem"><a href="/NJAN" className="sectionlink">NJAN</a></div>
                      </div>
                      <div className="sectiondivider"></div>
                    </div>
                    <div className="col-12 section">
                      <div className="sectionheader">Join Study</div>
                      <div className="row">
                        <div className="col-6 sectionitem"><a href="https://measure.parkin-sense.pulkith.com" className="sectionlink">Join our Study</a></div>
                      </div>
                      <div className="sectiondivider"></div>
                    </div>
                    <div className="col-12 section">
                      <div className="sectionheader">Company</div>
                      <div className="row">
                        <div className="col-6 sectionitem"><a href="/About" className="sectionlink">About Us</a></div>
                        <div className="col-6 sectionitem"><a href="/Team" className="sectionlink">Our Team</a></div>
                        <div className="col-6 sectionitem"><a href="/Join" className="sectionlink">Join Us</a></div>
                        <div className="col-6 sectionitem"><a href="/Partners" className="sectionlink">Partners</a></div>
                        <div className="col-6 sectionitem"><a href="/Recognition" className="sectionlink">Recognition</a></div>
                        <div className="col-6 sectionitem"><a href="/Contact" className="sectionlink">Contact Us</a></div>
                      </div>
                      <div className="sectiondivider"></div>
                    </div>
                  </div>
                </div>
                <div className="hamburgerwrapper">
                  <div className="hamburger">
                    <i className="fa fa-bars" style={{color: "white", fontSize: "2rem"}} onClick={() => {changeExpandMobile(!expandMobile)}}></i>    
                  </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  );
}