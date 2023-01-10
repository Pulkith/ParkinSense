
import React, { useState } from 'react';

import '../../css/Common.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';

const About = (props) => {
  return (
	
    <div className="aboutpage">
		<PageHeader title="About" subtitle="Our Beginning, Mission, and Goals." />
		<div className="sec1">
			<div className='regwrapper'>
				<h2 className="headinggrad">Our Mission</h2>
				<h2 className="headingSmall">Neurose aims to advance the start-of-the-art in Neurodegenerative Disease</h2>
				<p className="subheading2">
					Neurose is a platform for discovery of new and innovative ways to diagnose and treat Neurodegenerative disorders. From Research to Machine Learnng 
					to Development, Neurose accelerates the discovery and broadbasing of novel approaches to diagnosing, profiling, and treating Neurodegenerative disorders.	 
				</p>
			</div>
		</div>
		<div className="sec2">
			<div className='regwrapper'>
				<h2 className="headingSmall gradtext">By the Numbers</h2>
				<div className="row gradborder sec1" style={{textAlign: "center", marginTop: "50px"}}>
					<div className="col-4" style={{paddingBottom: "40px"}}>
						<h3 className="headingSmall">4</h3>
						<h3 className="subheading2">Research Projects</h3>
					</div>
					<div className="col-4">
						<h3 className="headingSmall">3</h3>
						<h3 className="subheading2">Publications</h3>
					</div>
					<div className="col-4">
						<h3 className="headingSmall">43K+</h3>
						<h3 className="subheading2">People Impacted</h3>
					</div>
					<div className="col-4">
						<h3 className="headingSmall">$10K+</h3>
						<h3 className="subheading2">Rasied</h3>
					</div>
					<div className="col-4">
						<h3 className="headingSmall">16M+</h3>
						<h3 className="subheading2">Datapoints Analyzed</h3>
					</div>
					<div className="col-4">
						<h3 className="headingSmall">10+</h3>
						<h3 className="subheading2">Team Members</h3>
					</div>
				</div>
			</div>
		</div>

		<div className="sec1">
			<div className="sec1inneractionwrapper">
				<h2 className="headinggrad">Neurose is growing</h2>
				<h2 className="headingSmall">Grow with us</h2>
				<br />
				<p className="subheading2">
					Join our team and help us to advance the start-of-the-art in Neurodegenerative Disease. 
					<br /><br />
					We have open positions in Leadership, Research, App Development, Machine Learning, Graphic Design, Enterprise Operations, and more!	
				</p>
				<br />
				<GradButton text="Let's Work Together" link="/Join"/>
			</div>
		</div>

		<div className="sec2">
			<div className="regwrapper">
				<div className="headingSmall">Our Story</div>
				<p className="subheading2">
					<br />
					Neurose was founded in 2021 by a group of students from Dallas. Originally a research organization focusing on the intersection of Machine Learning and Neuroscience, Neurose has then transitioned to include 
					a team of developers, designers, and researchers who develop Healthcare solutions, that provide massive peformant improvements over current solutions.
					<br /><br />
					Over the years Neurose has grown to include individuals who are passionate about Development, Neuroscience, and Research, with experience at various instuitions and organizations.
					<br /><br />
					Today Neurose is working on various projects, some of which are in the later stages and nearing release, and some that are just getting started. 
					<br /><br />
					<GradButton link="/News" text="Read our latest News" />
				</p>
			</div>
		</div>
		<div className="sec1">
			<div className="regwrapper">
				<div className="row">
					<div className="col-6 leftrightmargin padright" >
						<div className="headingSmall">Research & Development</div>
						<div className="subheading2">
							<br />
							Neurose is currently working on a number of projects that aim to diangose and treat Neurodegenerative disorders via Novel Approaches.
							<br /><br />

						</div>
						<GradButton link="/Projects" text="View our Ongoing Projects" />
					</div>
					<div className="col-6" style={{marginBottom: "100px"}}>
						<div className="maxsizeimgwrapper">
							<img className="" src={require('../../assets/about/research.png')} alt="research" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
						</div>
					</div>
					<div className="col-6" style={{marginBottom: "100px"}}>
					<img className="" src={require('../../assets/about/leadership.jpeg')} alt="leadership" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
					</div>
					<div className="col-6 leftrightmargin padleft">
						<div className="headinggrad">Experienced</div>
						<div className="headingSmall">Leadership</div>
						<div className="subheading2">
							<br />
							Founded and led by some of the nation's most experienced student researchers and developers, Neurose 
							has a proven Executive team who are passionate and commited to the success of our solutions and research.
							<br /><br />
							
						</div>
						<GradButton link="/Team" text="View our Team" />
					</div>

					<div className="col-6 padright">
						<div className="headinggrad">Internationally Recognized</div>
						<div className="headingSmall">Awards and Partners</div>
						<div className="subheading2">
								<br />
								Backed by some of the world's most recognized instutions, that are leading the charge on Neurodegenerative Diseases,	
								Neurose has been making breakthroughs in the field. 
								<br /><br />
								
								Neurose has also been recognized globally for its work in the field of Healthcare.

								<br /><br />
								
							</div>
							<GradButton link="/Partners" text="View our Partners" />
							<GradButton link="/Recognition" text="View our Recognition" />
					</div>
					<div className="col-6" style={{marginBottom: "100px"}}>
					<img className="" src={require('../../assets/about/winning.png')} alt="partners" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
					</div>
				</div>
			</div>
		</div>


    </div>
  );
}


export default About ;