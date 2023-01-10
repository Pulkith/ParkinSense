
import React, { useState, useEffect} from 'react';
import '../../css/PageHeader.css';
import {Gradient} from './Gradient.js'
const PageHeader = (props) => {

  const title = (props.title.length > 0) ? props.title : "";
  const subtitle = (props.subtitle.length > 0) ? props.subtitle : "";

  useEffect(() => {
    // Create your instance
		const gradient = new Gradient()

		// Call `initGradient` with the selector to your canvas
		gradient.initGradient('#gradient-canvas')

  });

  return (
    <> 
		  <div className="pageHeader">
		  
			<div className="headerwrapper">
				<div className="headerimg">
					<canvas id="gradient-canvas" data-transition-in />
				</div>
				<div className="headercontent">
					<div className="headingHeader headingSmall"> 
						{title} 
					</div>
					<div className="headingSubtitle subheading3"> 
						{subtitle} 
					</div>
				
					{/* <div className="headingSeperator"></div> */}
				</div>
			</div>
			
		  </div>
      

    </>
  );
}

export default PageHeader;