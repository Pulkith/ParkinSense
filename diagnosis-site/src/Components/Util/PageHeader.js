
import React, { useState } from 'react';
import '../../css/PageHeader.css';
const PageHeader = (props) => {

  const title = (props.title.length > 0) ? props.title : "";
  const subtitle = (props.subtitle.length > 0) ? props.subtitle : "";

  return (
    <>
		  <div className="pageHeader">
			<div className="headerwrapper">
				<div className="headerimg">
				</div>
				<div className="headercontent">
					<div className="headingHeader"> 
						{title} 
					</div>
					<div className="headingSubtitle"> 
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