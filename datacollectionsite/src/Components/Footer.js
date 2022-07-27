
import React from 'react';
import '../css/footer.css'
import Alert from '@mui/material/Alert';
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBBtn
  } from 'mdb-react-ui-kit';
  import $ from 'jquery'
  import { useState } from 'react';

export default function Footer() {

  let email = "";
  const [alertG, setalertG] = useState("");

  const addEmail = (e) => {
    e.preventDefault();
    let data = {}
    data['email'] = email
    data['personID'] = localStorage['IDval'] ||'none';

    setalertG("")

    $.ajax({
			type: "POST",
			url: "https://measure.parkin-sense.pulkith.com/server/add_to_list.php",
			data: data,
			success: (data) => {
        setalertG("Successfully Added Email!")
      } ,
			error:  (e) => setalertG("")
		});
  }

  return(



<MDBFooter className='text-center' color='white' bgColor='dark' id="footer">
      {
        alertG != "" &&
        <Alert severity="success" className="footAlert" >{alertG}</Alert>
      }
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong style={{"marginLeft": "30px", "marginRight": "30px"}}>Sign up for updates</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast label='Email Address' className='mb-4' onChange={(e) => {email=e.target.value}}/>
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' className="mb-4" onClick={addEmail} type="" style={{"marginLeft": "30px", "marginRight": "30px"}}>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
			We are looking for those with Parkinson's and those without, to help inform our study. Please send this site to those you know!
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    pulkith@princeton.edu
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    (347) 855-4840
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Dallas, Texas
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    measure.parkin-sense.pulkith.com
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>More Info</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.canva.com/design/DAE0ubjlDbU/luP0kJL-SjJ1v5cSka_EPw/view?utm_content=DAE0ubjlDbU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" className='text-white'>
                    Model
                  </a>
                </li>
                <li>
                  <a href='https://www.canva.com/design/DAE0ubjlDbU/luP0kJL-SjJ1v5cSka_EPw/view?utm_content=DAE0ubjlDbU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" className='text-white'>
                    Model Board
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/Home#mission' className='text-white'>
                    Mission
                  </a>
                </li>
                <li>
                  <a href='/Home#mission' className='text-white'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='/Home#proccess' className='text-white'>
                    Proccess
                  </a>
                </li>
                <li>
                  <a href='/Home#overview' className='text-white'>
                    Overview
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Study</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/Instructions' className='text-white'>
                    Complete Study
                  </a>
                </li>
                <li>
                  <a href='/Access' className='text-white'>
                    Access Camera
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
                <li>
                  <a href='/Adjust' className='text-white'>
                    Test Camera
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright 
        <a className='text-white' href='https://measure.parkin-sense.pulkith.com/'>
           &nbsp; Parkin-Sense
        </a>
        &nbsp;&nbsp; Certain parts of this site are from  
        <a className='text-white' href='https://parktest.net/'>
           &nbsp; PARK
        </a>
      </div>
    </MDBFooter>
  );
}