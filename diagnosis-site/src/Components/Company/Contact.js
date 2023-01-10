
import React, { useState } from 'react';
import '../../css/Common.css';
import PageHeader from '../Util/PageHeader';
import GradButton from './../Util/GradButton';

const Name = (props) => {
  return (
	
    <div className="njas">

		{/* SOCIAL Media
		SOCIAL Media
		SOCIAL Media
		SOCIAL Media
		SOCIAL Media
		SOCIAL Media
		SOCIAL Media */}


		<PageHeader title="Contact Us" subtitle="" />
		<div className="">
			<div className="sec1">
				<div className='sec1inneractionwrapper'>
					<h2 className="headinggrad"></h2>
					<h2 className="headingSmall">Contact Us</h2>
					<br />
					<p className="subheading2">
						We make it a priority to respond to all sincere messages within 3 business days.
					</p>
					<br />
					<GradButton text="Email Us: paruchuri@pulkith.com" link="mailto:paruchuri@pulkith.com" />
					{/* <GradButton text="Send a Message" /> */}
				</div>
			</div>
		</div>
    </div>
  );
}


export default Name ;