
import React, { useState } from 'react';

import '../../css/Common.css';
import GradButton from './../Util/GradButton';
import PageHeader from '../Util/PageHeader';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Join = (props) => {

	const questions = [
		"What is the compensation for my work?",
		"Can I get Research Publications?",
		"Who are you looking for?",
		"What are the expectations and commitments?",
		"What can you offer over other organizations?",
		"What type of research and development is Neurose doing",
		"How can I get a leadership position?",
		"How do I become an editor or peer-reviewer for NJAN?",
		"How can I learn more/Who can I contact for questions?",
		"What is the proccess?",

	];
	const answers = [
		"We currently offer volunteer hours, and experience with Research, Machine Learning, and Neuroscience as the compensation for your work. As a result, this position is mainly for High School and College Students looking for these benifits. ",
		"Individuals in the Research Team are able to get co-authorship on Research Publications, and are able to get their names on the Neurose Journal of Artificial Neuroscience (NJAN).",
		"Browse our openings, and apply if you are interested in the position. We are looking for individuals who are passionate about Neuroscience, and are willing to learn and grow with us.",
		"Expectations and Commitments are different for each position. Please read the job description for each position to see what is expected of you. Each position varies from around 1-8 hours per week.",
		"Neurose is a non-profit organization, and we are able to offer a lot of flexibility and freedom to our members. We are also able to offer a lot of experience and knowledge in the field of Neuroscience, and are able to offer a lot of opportunities for growth.",
		"Neurose is currently working on a variety of projects, all related to Neuroscience. You can view our projects on our Projects page.",
		"Leadership positions are available for those who should success in their role. We typically promote members to leadership positions, as opposed to hiring from outside.",
		"NJAN is a peer-reviewed journal. send us an email at paruchuri@pulkith.com if you are interested in becoming an editor or peer-reviewer.",
		"You can contact us at paruchuri@pulkith.com, or through the channels on the contact page.",
		"After you apply, your resume will be read. If you are chosen for the next round, you will be interviewed by an exectutive, and the leader of the team you will prospectively be in."
		
	];

	let FAQS = [];

	for (var i = 0; i < questions.length; ++i) {
		FAQS.push(
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Q: {questions[i]}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>A: {answers[i]}</Typography>
				</AccordionDetails>
			</Accordion>
		);
	}

	let openpositions = [
		{
			title: "Mobile Developer",
			desc: "Deploy the Machine Learning Pipeline to the mobile application.",
			team: "Model and Application Development",
			skills: ["Swift", "React Native", "Java"],
		},
		{
			title: "Opportunity & Outreach Lead",
			desc: "Reach out to Retirement Homes and Hopsitals to collect data for Neurose, and find new opportunites, such as awards and competitions for Neurose.",
			team: "Enterprise Operations",
			skills: ["Social Media", "Networking", "Commmunication"],
		},
		{
			title: "Recruitment Lead",
			desc: "Recruit new individuals to Neurose.",
			team: "Enterprise Operations",
			skills: ["Social Media", "Networking", "Commmunication"],
		},
		{
			title: "Machine Learning Engineer",
			desc: "Use various machine learning algorithms to analyze data and implement new algorithms to improve the accuracy of our applications. Coordinate with the Research team to implement new findings.",
			team: "Model and Application Development",
			skills: ["Machine Learning", "Python", "Sci-Kit Learn", "TenserFlow + Keras"],
		},
		{
			title: "Neuroscience Reseacher",
			desc: "Research novel neuroscience methods and theories that involve Machine Learning Algorithims. Publish Notable Findings.",
			team: "Reseach",
			skills: ["Research", "Paper-Writing", "Communication"],
		},
		{
			title: "Social Media Outreach Lead",
			desc: "Create publicity for Neurose, through social media platforms. Create content that is relevant to the community, and look for opportunties.",
			team: "Enterprise Operations",
			skills: ["Design", "Social Media", "Networking"],
		},
		{
			title: "Graphic	Designer",
			desc: "Create and design graphics for the website, applications, and publications.",
			team: "Model and Application Development",
			skills: ["Graphic Design", "UI/UX"],
		},
	]

	let openpositionslist = [];

	openpositionslist.push(<div className="seperator"></div>)
	for(var i = 0; i < openpositions.length; ++i) {
		openpositionslist.push(<Pub data={openpositions[i]}></Pub>)
		openpositionslist.push(<div className="seperator"></div>)
	}


  return (
	
    <div className="njas">
		<PageHeader title="Join Us" subtitle="We're always looking for motivated individuals to join our accomplished team." />
		<div className="sec1">
			<div className="regwrapper">
				<h2 className="headinggrad">Browse our open Positions</h2>
				<h2 className="headingSmall">Open Positions</h2>
				<br />
				
				{openpositionslist}

			</div>	
		</div>
		<div className="sec2">
			<div className="regwrapper">
				<h2 className="headinggrad">Common Questions</h2>
				<h2 className="headingSmall">FAQS</h2>
				<br />
				
				{FAQS}

			</div>	
		</div>
    </div>
  );
}

export default Join ;

const Pub = (props) => { 

	let skills = [];
	for(var i = 0; i < props.data.skills.length; ++i) {
		skills.push(<div className="paraReg tag">{props.data.skills[i]}</div>)
	}

	return(
		<div className="pub">

			<div className="row">

				<div className="col-12 col-md-10">
					<h2 className="subheading1">{props.data.title}</h2>
					<div className='paraReg thintext tag color2'>{props.data.team} </div>
					<p className="subheading2" style={{marginTop: "15px"}}> Job Description: <br />{props.data.desc}

					</p>
					<br />
					

					<p className="subheading2">
						Skills: {skills}
					</p>
					{/* {
						props.data.type === 'Publication' ? <div className='paraReg thintext tag color1 '>{props.data.type} </div> :
						<div className='paraReg thintext tag color2'>{props.data.type} </div>
					}
					<div className="paraReg thintext tag">{props.data.venue}</div>
					<div className="paraReg thintext slate">{props.data.authors}</div>
					<div className='paraReg thintext slate'>{props.data.date}</div> */}
				</div>
				<div className="col-12 col-md-2 d-flex justify-content-center">
					<div>
						<GradButton text="Apply Now" link={`mailto:paruchuri@pulkith.com?subject=Neurose Application - ${props.data.title}&body=Please attach your resume, and a short description of why you believe you would be a great fit.`} />
					</div>
				</div>
			</div>
			
		</div>
	)
}