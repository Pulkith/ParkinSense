
import React, { useState } from 'react';
import '../../css/partner.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';
const Partners = (props) => {


	let collegenames = ['hms.png', 'princeton.png', 'yale.png', 'Northwestern.jpeg', 'northeastern.png', 'mit.png', 'upenn.png']
	let links = ["https://hms.harvard.edu/", "https://www.princeton.edu/", "https://www.yale.edu/", "https://www.feinberg.northwestern.edu/", "https://www.northeastern.edu/", "https://www.mit.edu/", "https://www.upenn.edu/"]
	let colleges = []
	for(var i = 0; i < collegenames.length; ++i) {
		colleges.push(
			<div className="col-12 col-md-6">
				<a href={links[i]} target="_black" className="collegeimages ">
					<img src={require(`../../assets/colleges/${collegenames[i]}`)} className="collegeimg"></img>	
				</a>
			</div>
		)
	}

  return (
	
    <div className="partners" style={{width: "100%"}}>
		<PageHeader title="Partners & Recognition" subtitle="Our Partners, News Recognition, and awards." />
		<div className="sec1">
			<div className='regwrapper'>
				<h2 className="headinggrad">Supported by World Class Institutions</h2>
				<h2 className="headingSmall">Partners</h2>
				<br />
				<h3 className="subheading">Direct Partners</h3>
				<br></br>
				<div className="col-12 col-md-6">
					<a href="https://medicine.stanford.edu/" target="_black" className="collegeimages">
						<img src={require(`../../assets/colleges/Stanford.png`)} className="collegeimg"></img>		
					</a>
				</div>
				<br></br><br></br>
				<h3 className="subheading">Supporting Affiliations</h3>
				<br></br>
				<div className="row">
						{colleges}
					 </div>
			</div>
		</div>
		
		<div className="sec2">
			<div className='sec2inneractionwrapper'>
				<h2 className="headinggrad">Work with us</h2>
				<h2 className="headingSmall">Become a Partner</h2>
				<br />
				<p className="subheading2">
					We are always looking for new and innovative partners to join our growing network.
				</p>
				<br />
				<GradButton link="mailto:paruchuri@pulkith.com?subject=Neurose Partnership" text="Let's Work Together" />
			</div>
		</div>

    </div>
  );
}


export default Partners ;