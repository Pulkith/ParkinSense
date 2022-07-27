import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import logo from '../assets/logo_trans.png'

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
    <MDBNavbar sticky expand='lg' dark bgColor='dark'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='/Home' style={{"marginLeft": "10vw"}}>
			<img src={logo} style={{"width": "clamp(200px, 20vw, 1000px)"}}></img>

		</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0' style={{"marginLeft": "10vw"}}>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/Home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Instructions'>Begin Study</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#footer'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Home#mission'>FAQs</MDBNavbarLink>
            </MDBNavbarItem>
			<MDBNavbarItem>
              <MDBNavbarLink href='#footer'>Updates</MDBNavbarLink>
            </MDBNavbarItem>
			
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}