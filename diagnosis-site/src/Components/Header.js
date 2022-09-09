
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

  return (
    <>
     <div>
        <div className="navbarspacer">        
          
        </div>
        <div className="navbarwrapper">
          <div className="shownwrapper">
            <div className="logowrapper" onClick={() => window.location.href="/"}>
              <img className="logo" src={require('../assets/logo/logoNoBG.png')} alt="logo" />
            </div>
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
                    <p className="subheadingEx1">Recogniction</p>
                    <span className="subheading3">View our recogniction in the press and the awards Neurose has won.</span>
                  </div>
                </div>
              </div>
              <div className="headeritem">
                <a href="/Contact" className="navlink">Contact Us</a>
              </div>
            </div>
            
            <div className="logowrapper logowrapperhidden hamburgerwrapper">
              {/* <img className="logo" src={require('../assets/logo/logonamedash.png')} alt="logo" /> */}
              <div className="hamburger">
              <i className="fa fa-bars" style={{color: "white", fontSize: "2rem"}}></i>    
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  );
}