
import React, { useState } from 'react';
import '../../css/Team.css';
import PageHeader from './../Util/PageHeader';
const Team = () => {

	let exec = [], research = [], mad = [], eo = []
	exec.push(<StaffPerson name="Pulkith Paruchuri" title="Chief Executive Officer, VP Research" />)
	exec.push(<StaffPerson name="Diya Kumar" title="Chief Technology Officer, Chief Data Offier, VP MAD" />)
	exec.push(<StaffPerson name="Pranav Kulkarni" title="Chief Operating Officer, VP Enterprise Operations" />)

	research.push(<StaffPerson name="Vivian Nyugen" title="Project Lead, Reseacher" />)
	research.push(<StaffPerson name="Sharv Save" title="Project Lead, Reseacher" />);
	research.push(<StaffPerson name="Jiya Mody" title="Reseacher" />)
	research.push(<StaffPerson name="Dina Paul" title="Reseacher" />)
	research.push(<StaffPerson name="Pooja Kedia" title="Reseacher" />)


  
	mad.push(<StaffPerson name="Amoolya Tadepalli" title="VP of MAD CAP and Sugondese Department Head" />)
	mad.push(<StaffPerson name="Shreyas Pattabi" title="Development Lead, App Developer" />)
	mad.push(<StaffPerson name="Chloe Lee" title="Emotional Support" />)
	mad.push(<StaffPerson name="Vamsi Putti" title="App Developer" />)
	mad.push(<StaffPerson name="Akshar Chunduri" title="App Developer" />)

	eo.push(<StaffPerson name="Rithik Duvva" title="Finance Lead" />);
	eo.push(<StaffPerson name="Prayag Peram" title="Outreach Lead" />)
	eo.push(<StaffPerson name="Eshaan Shrivastava" title="Finance" />)


  return (
    <>
		 	<PageHeader title="Staff" subtitle="Meet the team behind Neurose." />
		 	<div className="team">
				<div className="leftwrap">
					<h1 className='heading gradtext thinfont'>We're ready to serve you with industry-leading experience</h1>
				</div>

				<div className="wrapper">
					<div className="department">
						<h2 className="subheading ">Executive Board</h2>
						<div className='row'>
							{exec}
						</div>
						
					</div>
					<div className="department">
						<h2 className="subheading ">Research</h2>
						<p className="subsubheading italic thinfont">The Research team conducts novel neuroscience research to develop state-of-the-art healthcare solutions. </p>
						<div className='row'>
							{research}
						</div>
					</div>
					<div className="department">
						<h2 className="subheading ">Model & Application Development</h2>
						<p className="subsubheading italic thinfont">The MAD team leverages cutting-edge technologies and the results from the Research team to develop Machine Learning Pipelines and Front-End Applications.</p>
						<div className='row'>
							{mad}
						</div>
					</div>
					<div className="department">
						<h2 className="subheading ">Enterprise Operations</h2>
						<p className="subsubheading italic thinfont">Enterprise Operations performs business-critical tasks to support the organization and conducts outreach and publicity events. </p>
						<div className='row'>
							{eo}
						</div>
					</div>
				</div>


			</div>

    </>
  );
}

const StaffPerson = (props) => {
	return(<>
		<div className="staffperson">
			<div className="img">
				<div className="maxsizeimgwrapper">
					<img src={require('../../assets/DefaultPFP.jpeg')} alt="placeholder" className="maxsizeimg" style={{borderRadius: "1rem 1rem 0rem 0rem"}}/>
				</div>
			</div>
			<div className='content'>
				<h2 className="name">{props.name}</h2>
				<h3 className="title">{props.title}
				
				</h3>

				<div className="emailwrapper" >
					<a href="#" className="contactbtn btn" ><i className="fa fa-envelope"></i> Contact</a>
				</div>
			</div>
		</div>
	</>)
}

export default Team;