import React from 'react';
import '../css/Landing.css';
import PE from '../assets/PE-Demo.png' 
import PS from '../assets/PS-DiagnosisSite.png'
import DPFP from '../assets/DefaultPFP.jpeg'
import VisitBtn from './Util/GradButton'
import '../css/Common.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import {getArticle, getRecentArticles} from './News/Articles/articles.js'

const Landing = () => {
	let papers = []
	let papernames = ["paper1", "paper2", "paper3"]
	for(var i = 0; i < 3; ++i) {
		papers.push(
			<div className="paper col-sm-6 col-md-4">
				<div className="paperwrapper">
					<img src={require(`../assets/paper/${papernames[i]}.png`)} className="paperImg"></img>
				</div>
			</div>
		)
	}

	let news = []
	let newsnumbers = getRecentArticles()
	let newslist = []


	newsnumbers.forEach((number) => {
		newslist.push(getArticle(number))
		console.log(getArticle(number))
	});


	for(var i = 0; i < newslist.length; ++i) {

		let tags = []

		for(var j = 0; j < newslist[i].tags.length; ++j) {
			tags.push(
				<span className="tag">{newslist[i].tags[j]}</span>
			)
		}

		news.push(
			<div className="newspreview col-9">
				<a href={'/News/' + newslist[i].urlslug} className="newslink">
				<div className="row newswrapper">
					<div className="col-sm-12 col-md-8 textwrapper">
						{tags}
						<div className="newsheading"> {newslist[i].title} </div>
						<div className="newsdescriptors">
							<span className="newsdescriptor"> {newslist[i].date} </span>
						</div>
					</div>
					<div className="col-sm-12 col-md-3 hideonsmall">
						<div className="imgwrappercenter imgwrapper hideonsmall">
							<div className="maxsizeimgwrapper newsborderrad">
								<img src={require(`../assets/news/${newslist[i].image}`)} className="maxsizeimg newsborderrad"></img>
							</div>
						</div>
					</div>
				</div>
				</a>
			</div>
				
		)
	}

	let people = []
	let info = [
		{"name": "Pulkith",
		"title": "CEO, VP Research",
		"dept": "Executive"},
		{"name": "Diya",
		"title": "CTO, VP MAD",
		"dept": "Executive"},
		{"name": "Pranav",
		"title": "COO, VP EO",
		"dept": "Executive"},
		{"name": "Sharv",
		"title": "Research Project Lead",
		"dept": "Research & Development"},
		{"name": "Rithik",
		"title": "Finance Lead",
		"dept": "Application Development"},
		{"name": "Vivan",
		"title": "Research Project Lead",
		"dept": "Research & Development"},
	]

	for(var t = 0; t < 2; ++t) {
		info.forEach( (person) => {
			people.push(
				<div className="profile col-3">
					<div className="wrapper">
						<div className="imgwrapper">
							<img className="img" src={DPFP}></img>
						</div>
						<div className="infowrapper">
							<div className="name"> {person.name} </div>
							<div className="title gradtext"> {person.title} </div>
							<div className="dept"> {person.dept} </div>
						</div>
					</div>		
				</div>
			)
		});
	}

	let collegenames = ['hms.png', 'princeton.png', 'yale.png', 'Northwestern.jpeg', 'Stanford.png', 'northeastern.png', 'mit.png', 'upenn.png']
	let colleges = []
	for(var i = 0; i < collegenames.length; ++i) {
		colleges.push(
			<div className="collegeimages col-md-12 col-lg-4">
				<img src={require(`../assets/colleges/${collegenames[i]}`)} className="collegeimg"></img>
			</div>
		)
	}
	
	let awardnames = ['blueocean.jpeg', 'diamond.png', 'ytbc.png']
	let awards = []
	for(var i = 0; i < awardnames.length; ++i) {
		awards.push(
			<div className="awardimages col-3">
				<img src={require(`../assets/awards/${awardnames[i]}`)} className="awardimg"></img>
			</div>
		)
	}


  return (
	<div className="wrapper">
		
		<div className="initialLanding">
			<div className="row landingtextcontent">
				<div className="col-sm-12 col-xxl-8">
					<div className="titlewrapper">
						<div className="headingLarge centertxt fadeingoup">Neurose</div>
						<div className="headingSmall gradtext centertxt fadeinsecond">Accelerating Neurologic Healthcare</div>
					</div>
				</div>
				{/* <div className="col-sm-12 col-md-6">
					<div className="landingheaderimg">
						<GetParticles />
					</div>
				</div> */}
			</div>
		</div>
		
		<div className="aboutSecton">
			<div className="about">
				<div className="row landingrow1" >
					<div className="col-lg-5">
					</div>
					<div className="col-md-12 col-lg-7">
						<div className="inneraboutwrapper">
							<div className="innerAbout">
								<p className="subheadingLarger centertxt fadein">
								Neuroscience meets Machine Learning 
								</p>
								<p className="subheading centertxt fadein slate">Neurose develops and provides a number of healthcare solutions that diagnose Neurodegenerative disorders in an accurate, rapid manner via Machine Learning.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about">
				<div className="row landingrow2">
					<div className="col-md-12 col-lg-7">
						<div className="inneraboutwrapper">
							<div className="innerAbout">
									<p className="subheadingLarger centertxt fadein">
										A Capable and Experienced Team
									</p>
									<p className="subheading centertxt fadein slate">Neurose employs individuals from across the United States that are driven and experienced in a wide gamut of fields. Neurose also parthners with some of the leading instituitions in Neuroscience research.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="products">
			<p className="subheadingLarger centertxt">Our Solutions</p>
			<br /><br /><br />
			<Solution title="ParkinSense" description="An accurate and rapid approach to Parkinson's Disease Diagnosis entirely via a webcam and microphone." index="0" img={PS}></Solution>
			<Solution title="ParkEnd" description="A proven solution that allows those with Parkinson's Disease to be treated remotely, with few requirements. Coming in 2023." index="1" img={PE}></Solution>
		</div>


		<div className="research">
			<p className="subheadingLarger centertxt">Research & Journal</p>


			<div className="landingOpenDesc">
				<p className="subheading slate">
					The Research Team at Neurose conducts research on various fields of Neuroscience and Neurodegenerative Disorders to develop new solutions for diagnosis and treatment, and to create innovations in the field. You can browse our latest research papers below.
				</p>

				<div className="row justify-content-center">
					{papers}
				</div>

				<VisitBtn link="/Publications" text="Read All Papers"></VisitBtn>


				<div className="seperator"></div>
				<p className="subheading slate">
					The Neurose Journal of Applied Neuroscience (NJAN) is a High School, peer-reviewed open access journal that publishes original research in the field of Neuroscience and Neurodegenerative Disorders.
				</p>
				<div style={{paddingLeft: "10px !important"}}>
					<VisitBtn link="/NJAN" text="Read NJAN"></VisitBtn>
					<VisitBtn  link="/NJAN" text="Submit to NJAN"></VisitBtn>
				</div>
			</div>
		</div>

		<div className="recog landingOpenDesc">
			<p className="subheadingLarger centertxt">Partners & Recognition</p>
			<p className="subheading slate centertext">Neurose is supported by reseachers at various instituitions, many of which are at the forefront of Neuroscience and Neurodegenerative disorder research.</p>
			<div className="row justify-content-center">
				{colleges}
			</div>
			<VisitBtn text="Full Partner List" link="/Partners"></VisitBtn>
			<div className="seperator"></div>
			<p className="subheading slate centertext">Neurose has been recognized globally for its efforts and success.</p>
			<div className="row justify-content-center">
				{awards}
			</div>
			<VisitBtn text="See all Awards"  link="/Recognition"></VisitBtn>
		</div>

		<div className="news">
			<p className="subheadingLarger centertxt">Latest News</p>
			<div className="row justify-content-center" style={{marginBottom: "20px"}}>
				{news}
			</div>	
			<div style={{"text-align": "center"}}>
				<VisitBtn link="/News" text="Read all News"></VisitBtn>
			</div>
		</div>

		<div className="org">
			<p className="subheadingLarger centertxt">Leadership</p>
			
			<div style={{width:  "80%", margin: "auto"}}>
				<div className="peoplecarouselwrapper">
					<div className="peoplecarousel">
						{people}
					</div>
				</div>
			</div>
			<div className="centertxt">
				<VisitBtn link="/Team" text="See Organization and Staff"></VisitBtn>
			</div>
		</div>

		
		
	</div> 
  );
}

export default Landing;

const Solution = (props) => {
	return(
		<div className="solution">
			<div className="wrapper">
				<div className="row">

					{
						props.index % 2 == 0 ? 
						<>
							<div className="col-md-12 col-lg-5 order-2">
								<p className="heading subheadingLarge">
									{props.title}
								</p>
								<p className="description">
									{ props.description }
								</p>
								<div className="seperator"></div>
								<VisitBtn link="/Solutions/ParkinSense" text="Learn More" />
							</div>
							<div className="picwrapperwrapper col-md-12 col-lg-7 order-1 order-lg-2">
								<div className="picwrapper">
									<div className="inwrapper">
										<img src={props.img} className="img"></img>
									</div>
								</div>
							</div>
						</> :
						<>
						<div className="picwrapperwrapper col-md-12 col-lg-7">
							<div className="picwrapper">
								<img src={props.img} className="img"></img>
							</div>
						</div>
						<div className="col-md-12 col-lg-5">
							<p className="heading subheadingLarge">
								{ props.title }
							</p>
							<p className="description">
								{props.description}
							</p>
							<div className="seperator"></div>
							<VisitBtn link="/Solutions/ParkEnd" text="Learn More" />
						</div>
					</>

					}

				</div>
			</div>
		</div>
	)
}


const GetParticles = () => {
	const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
	return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
				detectRetina: false,
				fullScreen: false,
				fpsLimit: 60,
				interactivity: {
				  detectsOn: "canvas",
				  events: {
					onHover: {
					  enable: true,
					  mode: "bubble"
					},
					resize: true
				  },
				  modes: {
					bubble: {
					  distance: 80,
					  duration: 2,
					  opacity: 1,
					  size: 6
					},
					 repulse: {
					  distance: 20,
					  duration: 0.4
					},
				  }
				},
				particles: {
				  color: {
					value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
				  },
				  links: {
					blink: false,
					color: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
					consent: false,
					distance: 40,
					enable: true,
					opacity: 0.8,
					width: 2
				  },
				  move: {
					attract: {
					  enable: false,
					  rotate: {
						x: 600,
						y: 1200
					  }
					},
					bounce: false,
					direction: "none",
					enable: true,
					outMode: "bounce",
					random: true,
					speed: 1,
					straight: false
				  },
				  number: {
					density: {
					  enable: false,
					  area: 5000
					},
					limit: 0,
					value: 1000
				  },
				  opacity: {
					animation: {
					  enable: false,
					  minimumValue: 0.05,
					  speed: 2,
					  sync: false
					},
					random: false,
					value: 0.5
				  },
				  shape: {
					type: "circle"
				  },
				  size: {
					animation: {
					  enable: false,
					  minimumValue: 0.1,
					  speed: 40,
					  sync: false
					},
					random: false,
					value: 0.5
				  }
				},
				polygon: {
				  draw: {
					enable: true,
					lineColor: "rgba(255,255,255,0.8)",
					lineWidth: 0.5
				  },
				  move: {
					radius: 10
				  },
				  position: {
					x: 30,
					y: 30
				  },
				  inlineArrangement: "equidistant",
				  scale: 5,
				  type: "inline",
				  data: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 110.33" style="enable-background:new 0 0 122.88 110.33" xml:space="preserve"><g><path d="M13.9,67.74c1.15,0.54,2.34,0.96,3.59,1.28c1.24,0.32,2.54,0.55,3.87,0.67c1.18,0.11,2.4,0.15,3.65,0.12 c1.08-0.03,2.2-0.11,3.35-0.24c-0.26-1.96-0.39-3.7-0.34-5.26c0.05-1.73,0.33-3.22,0.89-4.53c0.52-1.21,1.26-2.23,2.27-3.08 c0.82-0.7,1.82-1.28,3.03-1.76c-0.79-0.75-1.51-1.43-2.14-2.07c-0.8-0.81-1.46-1.55-1.97-2.27c-1.28-1.79-1.7-3.34-1.08-4.99 c0.59-1.56,2.17-3.15,4.91-5.1c1.41-1,2-1.88,2.17-2.75c0.18-0.88-0.07-1.83-0.34-2.88c-0.15-0.6-0.31-1.22-0.43-1.83 c-0.12-0.59-0.21-1.2-0.25-1.86c-1.03-0.96-2.52-2.26-4.32-3.09c-1.85-0.85-4.05-1.22-6.43-0.21c-0.44,0.18-0.91,0.17-1.31,0.01 c-0.41-0.17-0.75-0.49-0.93-0.92l0,0c-0.18-0.44-0.17-0.9-0.01-1.31c0.17-0.41,0.49-0.75,0.92-0.93l0.01,0 c2.86-1.21,5.46-1.09,7.69-0.38c1.91,0.61,3.55,1.66,4.87,2.7c0.24-0.8,0.58-1.65,1.05-2.55c0.61-1.18,1.44-2.45,2.55-3.83 c0.49-0.6,0.97-1.23,1.43-1.9c0.46-0.67,0.89-1.41,1.28-2.23c0.39-0.83,0.74-1.77,1.02-2.86c0.28-1.1,0.5-2.34,0.63-3.78h0 c0.04-0.47,0.27-0.88,0.61-1.17c0.34-0.28,0.78-0.44,1.25-0.4c0.47,0.04,0.88,0.27,1.17,0.61l0.03,0.04 c0.26,0.33,0.41,0.76,0.37,1.22l-0.01,0.05c-0.15,1.64-0.4,3.07-0.73,4.34c-0.34,1.29-0.75,2.41-1.22,3.41 c-0.47,1.01-0.99,1.88-1.52,2.67c-0.53,0.78-1.08,1.48-1.62,2.16c-1.23,1.53-2.04,2.89-2.55,4.1c-0.49,1.17-0.7,2.21-0.75,3.15 c0.04,0.14,0.06,0.29,0.05,0.44c0,0.15-0.02,0.3-0.06,0.44c0.03,0.54,0.1,1.05,0.2,1.55c0.11,0.55,0.23,1.04,0.36,1.51 c0.42,1.62,0.79,3.08,0.48,4.59c-0.32,1.52-1.32,3.03-3.64,4.68c-1.83,1.3-2.89,2.28-3.33,3.14c-0.37,0.73-0.23,1.4,0.3,2.16 c0.79,1.12,2.24,2.49,4.11,4.25c0.77-1.74,1.69-3.21,2.74-4.41c1.2-1.37,2.57-2.39,4.11-3.08c1.7-0.76,3.57-1.1,5.6-1.03 c2.02,0.06,4.2,0.52,6.53,1.35c0.45,0.16,0.79,0.49,0.98,0.89c0.19,0.39,0.22,0.85,0.07,1.29l-0.02,0.05 c-0.16,0.44-0.49,0.77-0.88,0.95c-0.39,0.19-0.85,0.22-1.29,0.07l-0.04-0.01c-1.94-0.69-3.71-1.08-5.31-1.14 c-1.58-0.07-3,0.17-4.25,0.73c-1.24,0.55-2.34,1.44-3.31,2.66c-0.98,1.25-1.81,2.85-2.49,4.82l0,0c-0.06,0.17-0.15,0.33-0.25,0.48 c-0.09,0.12-0.2,0.23-0.32,0.32l-0.02,0.03c-0.01,0.02-0.04,0.05-0.08,0.09c-0.12,0.13-0.26,0.23-0.4,0.31 c-0.13,0.07-0.26,0.13-0.4,0.16c-0.02,0.01-0.05,0.02-0.08,0.02l-0.01,0c-1.66,0.37-2.93,0.86-3.89,1.49 c-0.93,0.61-1.55,1.35-1.94,2.25c-0.43,1-0.62,2.24-0.63,3.73c-0.01,1.53,0.18,3.32,0.49,5.41l0,0.02 c0.01,0.05,0.01,0.11,0.01,0.17c0.9,1.13,1.95,2.09,3.12,2.91c1.23,0.86,2.6,1.56,4.1,2.13c1.61,0.62,3.36,1.08,5.23,1.41 c1.87,0.33,3.86,0.54,5.95,0.65c0.1,0,0.19,0.02,0.28,0.04l0,0c0.09,0.02,0.18,0.04,0.26,0.08c1.09,0.34,2.4,0.43,3.89,0.31 c1.53-0.12,3.23-0.46,5.06-0.95c1.93-0.52,3.98-1.22,6.1-2.02c2.12-0.8,4.33-1.72,6.56-2.68l0.03-0.01 c0.05-0.02,0.11-0.04,0.16-0.06c0.07-0.02,0.13-0.04,0.19-0.05L85,69.12V62.1c0-0.03,0-0.07,0.01-0.1l0-0.05 c0.1-1.15,0.3-2.19,0.59-3.1c0.3-0.93,0.69-1.73,1.18-2.41c0.53-0.74,1.17-1.33,1.91-1.77c0.73-0.43,1.56-0.71,2.48-0.83 c0.06-0.01,0.1-0.02,0.14-0.02l0.01,0c0.05,0,0.09-0.01,0.13-0.01l1.29,0.02v0l0.05,0c2.79,0.04,5.36,0.07,7.3-2.12 c1-1.12,1.64-2.3,2.01-3.52c0.37-1.22,0.46-2.48,0.34-3.75c-0.12-1.34-0.47-2.69-0.95-4.04c-0.49-1.36-1.13-2.69-1.83-3.98 c-0.23-0.42-0.26-0.89-0.14-1.31c0.12-0.42,0.41-0.8,0.83-1.02l0.01,0c0.41-0.22,0.88-0.26,1.3-0.13c0.42,0.12,0.8,0.41,1.02,0.83 l0,0c0.79,1.44,1.51,2.97,2.07,4.53c0.57,1.58,0.97,3.2,1.12,4.83c0.15,1.7,0.03,3.4-0.47,5.06c-0.5,1.66-1.38,3.27-2.73,4.79 c-2.99,3.36-6.33,3.31-9.95,3.26v0l-0.05,0c-0.23,0-0.49-0.01-1.1-0.01c-0.43,0.06-0.81,0.19-1.14,0.39 c-0.33,0.2-0.62,0.46-0.87,0.8c-0.29,0.4-0.53,0.91-0.72,1.51c-0.19,0.62-0.32,1.33-0.4,2.15v6.12l10.93-2.82l0,0l0.02,0 c0.02-0.01,0.04-0.01,0.07-0.02l13-2.54c0.63-0.41,1.22-0.85,1.76-1.31c0.58-0.49,1.1-0.99,1.56-1.51 c1.43-1.59,2.39-3.37,2.97-5.27c0.62-2.05,0.79-4.25,0.59-6.49c-0.19-2.17-0.72-4.38-1.52-6.55c-0.85-2.32-1.99-4.59-3.34-6.73 c-0.94-1.49-1.99-2.92-3.1-4.25c-1.13-1.34-2.32-2.58-3.54-3.68c-0.1-0.09-0.19-0.19-0.26-0.29c-0.07-0.1-0.13-0.2-0.17-0.31 l-0.01-0.03c-1.07-2.65-2.27-5.18-3.74-7.47c-1.46-2.28-3.2-4.32-5.34-6.01c-2.14-1.69-4.7-3.04-7.84-3.94 c-3.16-0.91-6.9-1.37-11.36-1.26c-0.11,0-0.21,0-0.3-0.02c-0.09-0.01-0.18-0.04-0.27-0.06l-0.16-0.05 c-0.85,0.59-1.6,1.21-2.25,1.87c-0.7,0.7-1.28,1.42-1.76,2.18c-0.48,0.77-0.86,1.57-1.14,2.4c-0.28,0.84-0.46,1.71-0.54,2.61 c-0.04,0.43-0.23,0.8-0.52,1.08c-0.28,0.27-0.64,0.44-1.04,0.47c-0.03,0-0.06,0.01-0.09,0.01h-0.01c-1.55,0.09-2.91,0.42-4.09,0.96 c-1.25,0.57-2.31,1.37-3.19,2.37c-0.92,1.03-1.66,2.27-2.24,3.68c-0.61,1.46-1.05,3.1-1.33,4.86c0.19,0.46,0.34,0.94,0.46,1.43 c0.13,0.52,0.23,1.05,0.34,1.58c0.16,0.84,0.33,1.68,0.6,2.34c0.24,0.58,0.57,1.02,1.08,1.19c0.45,0.15,0.8,0.46,0.99,0.86 c0.2,0.39,0.25,0.86,0.1,1.31c-0.15,0.45-0.47,0.8-0.86,0.99c-0.39,0.2-0.86,0.25-1.31,0.1l-0.04-0.02 c-1.47-0.5-2.34-1.42-2.91-2.54c-0.55-1.09-0.79-2.33-1.03-3.58c-0.06-0.32-0.12-0.63-0.2-0.99l-0.01-0.04 c-0.05-0.24-0.11-0.48-0.18-0.7c-1.66-1.25-3.57-0.82-5.42,0.29v0c-1.99,1.19-3.94,3.14-5.5,4.7c-0.33,0.33-0.65,0.65-0.95,0.94 c-0.3,0.29-0.59,0.57-0.89,0.84c-0.35,0.32-0.8,0.46-1.24,0.44c-0.43-0.02-0.85-0.21-1.16-0.55l0,0c-0.02-0.02-0.04-0.04-0.05-0.06 c-0.29-0.35-0.42-0.78-0.4-1.2c0.02-0.43,0.21-0.85,0.55-1.16l0,0c0.02-0.02,0.04-0.03,0.06-0.05c0.44-0.4,1.02-0.98,1.65-1.61 c0-0.01,0.03-0.03,0.04-0.04c1.71-1.72,3.8-3.81,6.11-5.23c2.22-1.36,4.63-2.08,7.07-1.25c0.36-1.68,0.86-3.25,1.5-4.69 c0.69-1.54,1.56-2.93,2.62-4.12c1.09-1.22,2.37-2.23,3.85-2.98c1.31-0.66,2.79-1.13,4.44-1.35c0.16-0.84,0.38-1.66,0.68-2.46 c0.34-0.92,0.78-1.8,1.32-2.65c0.45-0.72,0.98-1.41,1.57-2.07c0.39-0.44,0.81-0.86,1.26-1.27c-1.68-0.44-3.35-0.85-5.01-1.22 c-1.91-0.42-3.8-0.78-5.67-1.07l-0.07,0.03c-0.62,0.23-1.2,0.68-1.73,1.29c-0.62,0.71-1.18,1.64-1.67,2.66 c-0.65,1.36-1.16,2.87-1.54,4.31c-0.49,1.84-0.77,3.59-0.87,4.82c-0.04,0.47-0.27,0.89-0.6,1.17c-0.33,0.28-0.77,0.44-1.23,0.4 l-0.04,0c-0.46-0.04-0.87-0.27-1.15-0.6c-0.28-0.33-0.44-0.77-0.4-1.23l0-0.04c0.12-1.38,0.44-3.35,0.99-5.42 c0.43-1.64,1.01-3.35,1.75-4.9c0.36-0.75,0.75-1.47,1.2-2.13c0.22-0.33,0.44-0.64,0.68-0.93c-0.85-0.07-1.69-0.12-2.54-0.16 c-1.17-0.05-2.34-0.05-3.5-0.02c-4.09,0.12-8.15,0.76-12.21,2.09c-3.89,1.28-7.77,3.19-11.69,5.91c0.45,0.29,0.87,0.61,1.28,0.94 c0.61,0.51,1.17,1.06,1.68,1.65c0.71,0.83,1.3,1.75,1.76,2.72c0.45,0.95,0.76,1.95,0.92,2.98c0.07,0.47-0.06,0.92-0.32,1.28 c-0.26,0.35-0.66,0.61-1.13,0.68c-0.47,0.07-0.92-0.06-1.28-0.32c-0.35-0.26-0.61-0.66-0.68-1.13c-0.11-0.71-0.33-1.4-0.64-2.06 c-0.32-0.68-0.75-1.33-1.26-1.93c-0.52-0.61-1.13-1.17-1.82-1.66c-0.66-0.47-1.38-0.88-2.15-1.19c-0.78,0.42-1.55,0.85-2.29,1.3 c-0.82,0.49-1.62,1.01-2.39,1.54c-1.08,0.75-2.11,1.56-3.09,2.44c-0.85,0.76-1.65,1.57-2.39,2.44c1.92,1.57,2.68,3.24,2.82,4.99 c0.15,1.82-0.38,3.69-0.94,5.65c0,0.02-0.01,0.04-0.02,0.07c-1.01,3.57-2.13,7.57,2.81,11.79c0.36,0.31,0.56,0.74,0.6,1.17 c0.03,0.44-0.1,0.89-0.41,1.25c-0.31,0.36-0.74,0.56-1.17,0.6c-0.44,0.03-0.89-0.1-1.25-0.41c-3.31-2.82-4.6-5.54-4.9-8.13 c-0.3-2.57,0.38-4.97,1.02-7.23c0.42-1.48,0.82-2.89,0.75-4.14c-0.06-1.08-0.49-2.1-1.6-3.02c-1.48,1.67-2.85,3.4-4.07,5.23 c-1.3,1.95-2.41,4.02-3.29,6.24c-0.98,2.49-1.66,5.19-1.95,8.14c-0.29,2.96-0.19,6.19,0.38,9.75c0.3,1.88,0.64,3.55,1.08,5.04 c0.44,1.46,0.98,2.76,1.7,3.91c0.7,1.12,1.59,2.13,2.75,3.07C10.68,66.04,12.12,66.91,13.9,67.74L13.9,67.74z M86.82,42.45 c2.21,2.05,2.91,3.61,2.65,5.16c-0.26,1.56-1.5,2.97-3.15,4.87l0,0c-0.78,0.89-1.67,1.92-2.52,3.07c-0.28,0.38-0.69,0.61-1.13,0.68 c-0.43,0.06-0.89-0.04-1.27-0.32c-0.38-0.28-0.61-0.69-0.68-1.13c-0.06-0.43,0.04-0.89,0.32-1.27c1-1.34,1.9-2.38,2.68-3.28 l0.01-0.01c1-1.15,1.75-2.01,1.93-2.8c0.15-0.67-0.12-1.37-1.05-2.32l-0.37,0.14v0c-0.2,0.07-0.49,0.18-0.83,0.3 c-0.32,0.11-0.67,0.24-1.03,0.37c-0.38,0.14-0.8,0.31-1.23,0.49c-0.17,0.07-0.32,0.14-0.47,0.21l-0.48,0.22 c-0.36,0.17-0.73,0.34-1.1,0.5c-0.39,0.16-0.78,0.31-1.18,0.43c-0.53,0.16-1.09,0.34-1.56,0.49l-0.03,0.01 c-1.28,0.4-1.96,0.62-2.9,0.66c-0.5,0.02-1-0.02-1.63-0.13c-0.62-0.1-1.34-0.26-2.33-0.47l-0.95-0.2 c-0.03-0.01-0.05-0.01-0.08-0.02l-0.1-0.03l-3.98-1.33c-0.03-0.01-0.05-0.01-0.07-0.02c-0.44-0.15-0.77-0.46-0.97-0.85 c-0.19-0.38-0.24-0.84-0.11-1.28l0.02-0.06c0.15-0.44,0.46-0.77,0.85-0.97c0.39-0.19,0.84-0.24,1.28-0.11 c0.03,0.01,0.05,0.02,0.07,0.03l3.85,1.28l0.9,0.19c0.88,0.19,1.53,0.33,2.04,0.41c0.48,0.08,0.81,0.12,1.08,0.11 c0.43-0.02,0.97-0.19,1.98-0.51c0.25-0.07,0.49-0.16,0.74-0.23c0.3-0.09,0.61-0.19,0.91-0.28c0.61-0.18,1.21-0.46,1.81-0.74 l0.52-0.24c0.18-0.08,0.36-0.16,0.55-0.24c1.06-0.45,1.83-0.72,2.45-0.94c0.62-0.22,0.94-0.33,1.02-0.55 c0.13-0.32,0.08-1-0.03-2.36c-0.12-1.56-0.17-2.8-0.09-3.87c0.08-1.1,0.31-2.01,0.76-2.87c0.44-0.85,1.05-1.58,1.91-2.31 c0.83-0.71,1.89-1.43,3.24-2.29L89.15,28c0.42-0.27,0.74-0.46,1.01-0.63l0.05-0.03c0.77-0.47,1.21-0.74,1.42-1.12 c0.23-0.4,0.29-1.04,0.31-2.26c0.01-0.71,0.04-1.36,0.13-1.98c0.09-0.65,0.24-1.25,0.5-1.82c0.3-0.64,0.71-1.2,1.28-1.68 c0.56-0.47,1.28-0.85,2.19-1.14c0.45-0.14,0.92-0.09,1.31,0.11c0.39,0.2,0.7,0.56,0.85,1.01c0.14,0.45,0.09,0.92-0.11,1.31 c-0.2,0.39-0.56,0.7-1.01,0.85c-0.42,0.13-0.73,0.29-0.96,0.46c-0.2,0.15-0.34,0.33-0.43,0.52c-0.12,0.26-0.2,0.6-0.24,0.99 c-0.05,0.43-0.07,0.91-0.08,1.43c-0.04,2.07-0.16,3.17-0.66,4.02c-0.51,0.87-1.31,1.36-2.74,2.24l-0.51,0.31l-0.45,0.28l-0.1,0.07 c-1.14,0.73-2.02,1.31-2.67,1.84c-0.62,0.5-1.03,0.95-1.27,1.42c-0.24,0.47-0.36,1.04-0.4,1.8c-0.04,0.8,0.01,1.82,0.11,3.11 c0.06,0.82,0.11,1.49,0.14,2.1C86.84,41.71,86.84,42.11,86.82,42.45L86.82,42.45z M67.07,67.85c0.36,0.28,0.58,0.67,0.65,1.09 c0.07,0.43-0.02,0.89-0.3,1.28l-0.01,0.01c-0.28,0.38-0.68,0.61-1.11,0.68c-0.43,0.07-0.89-0.02-1.28-0.3l0,0 c-0.25-0.18-0.48-0.37-0.69-0.58c-0.22-0.21-0.42-0.44-0.6-0.68c-0.54-0.71-0.93-1.53-1.16-2.41c-0.24-0.91-0.32-1.89-0.25-2.86 c0.06-0.92,0.26-1.86,0.58-2.75c0.31-0.87,0.74-1.71,1.28-2.46l0,0c0.25-0.34,0.52-0.67,0.81-0.98c0.29-0.3,0.59-0.57,0.92-0.82 L65.99,57c0.48-0.36,0.99-0.68,1.53-0.96c0.54-0.28,1.11-0.52,1.7-0.72c0.6-0.2,1.22-0.37,1.87-0.5c0.64-0.13,1.31-0.22,2-0.28 l0.14-0.01h6c0.48,0,0.91,0.19,1.22,0.5l0.03,0.03c0.29,0.31,0.47,0.73,0.47,1.18c0,0.48-0.19,0.91-0.5,1.22 c-0.31,0.31-0.74,0.5-1.22,0.5h-5.95c-0.53,0.05-1.04,0.12-1.54,0.22c-0.5,0.1-0.98,0.22-1.42,0.37c-0.42,0.14-0.83,0.31-1.21,0.51 c-0.37,0.19-0.72,0.4-1.04,0.64L68,59.79c-0.19,0.15-0.37,0.31-0.54,0.48c-0.18,0.18-0.34,0.38-0.49,0.59 c-0.35,0.48-0.63,1.03-0.84,1.61c-0.21,0.59-0.34,1.21-0.38,1.82l0,0.01c-0.04,0.59,0,1.16,0.13,1.67 c0.12,0.48,0.31,0.91,0.59,1.27l0.02,0.03c0.08,0.1,0.16,0.19,0.25,0.28l0,0c0.09,0.09,0.19,0.17,0.3,0.25L67.07,67.85L67.07,67.85 z M40.58,65.49c-0.45,0.11-0.9,0.03-1.28-0.2l0,0c-0.38-0.23-0.67-0.6-0.79-1.06c-0.12-0.46-0.03-0.92,0.19-1.3l0,0 c0.23-0.38,0.6-0.67,1.06-0.79c3.91-0.99,6.27-1.06,8.13-0.4c1.88,0.67,3.15,2.04,4.93,3.94l0.2,0.22c0.73,0.78,1.33,1.41,1.87,1.9 c0.51,0.47,0.97,0.82,1.42,1.05c0.43,0.22,0.9,0.36,1.49,0.44c0.62,0.09,1.36,0.11,2.28,0.1h0c0.47-0.01,0.9,0.18,1.22,0.48 c0.31,0.3,0.51,0.73,0.52,1.21v0.01h0l0,0.05c-0.01,0.45-0.19,0.87-0.48,1.17c-0.3,0.31-0.73,0.51-1.2,0.52h-0.01v0l-0.04,0 c-1.18,0.02-2.14-0.02-2.98-0.16c-0.88-0.14-1.64-0.38-2.37-0.76c-0.71-0.36-1.35-0.83-2.03-1.44c-0.66-0.59-1.36-1.32-2.2-2.22 l-0.2-0.22c-1.33-1.43-2.29-2.46-3.6-2.92c-1.33-0.46-3.1-0.39-6.09,0.37L40.58,65.49L40.58,65.49z M77.6,23.75 c-0.11-0.31-0.24-0.6-0.39-0.88c-0.2-0.36-0.44-0.69-0.69-0.97c-0.28-0.32-0.58-0.59-0.87-0.81c-0.31-0.23-0.61-0.4-0.88-0.51l0,0 c-0.44-0.17-0.77-0.51-0.95-0.91c-0.18-0.4-0.2-0.87-0.03-1.31l0,0c0.17-0.44,0.51-0.77,0.91-0.95c0.4-0.18,0.87-0.2,1.31-0.03 c0.52,0.2,1.08,0.51,1.63,0.91c0.5,0.37,1,0.82,1.46,1.35c0.28,0.32,0.55,0.67,0.79,1.04c0.14,0.21,0.27,0.43,0.39,0.65 c0.23-0.11,0.47-0.22,0.74-0.34l0.03-0.01c0.43-0.19,0.91-0.39,1.45-0.61c0.54-0.22,1.14-0.47,1.83-0.77 c0.68-0.3,1.44-0.64,2.3-1.06c0.43-0.21,0.9-0.22,1.31-0.07c0.42,0.14,0.78,0.45,0.98,0.88c0.21,0.43,0.22,0.9,0.07,1.31 c-0.14,0.42-0.45,0.78-0.88,0.98c-0.87,0.42-1.67,0.79-2.39,1.1c-0.69,0.3-1.32,0.56-1.89,0.8c-0.02,0.01-0.05,0.02-0.08,0.03 c-2.72,1.13-3.31,1.39-3.6,4.54l-0.01,0.11c-0.18,1.89-0.31,3.36-0.83,4.76c-0.52,1.42-1.41,2.71-3.08,4.2 c-0.35,0.32-0.8,0.46-1.24,0.43c-0.44-0.03-0.87-0.22-1.19-0.57c-0.32-0.35-0.46-0.8-0.43-1.24c0.03-0.44,0.22-0.87,0.57-1.19 c1.18-1.05,1.8-1.97,2.16-2.98c0.37-1.04,0.48-2.21,0.62-3.71l0.01-0.11c0.09-0.99,0.2-1.8,0.35-2.47 C77.22,24.71,77.39,24.19,77.6,23.75L77.6,23.75z M4.86,45.88c0-0.02,0-0.05,0-0.07c0.03-0.45,0.23-0.86,0.54-1.15 c0.32-0.3,0.75-0.48,1.21-0.46v0c0.02,0,0.05,0,0.07,0c0.45,0.03,0.86,0.23,1.15,0.54c0.3,0.32,0.48,0.76,0.46,1.23 c-0.06,1.82,0.52,2.94,1.45,3.73c0.98,0.83,2.38,1.34,3.86,1.88c2.21,0.81,4.55,1.66,6.46,3.42c1.92,1.77,3.37,4.41,3.71,8.74 c0.04,0.47-0.12,0.92-0.41,1.25c-0.29,0.34-0.7,0.56-1.17,0.6c-0.47,0.04-0.92-0.12-1.25-0.41c-0.34-0.29-0.56-0.7-0.6-1.17 c-0.26-3.26-1.35-5.23-2.8-6.54l-0.03-0.03c-1.46-1.31-3.33-1.99-5.09-2.63c-2.01-0.73-3.91-1.43-5.32-2.71 C5.66,50.79,4.77,48.92,4.86,45.88L4.86,45.88L4.86,45.88z M85.28,72.59c0.68,0.3,1.37,0.54,2.09,0.73 c1.15,0.3,2.34,0.48,3.57,0.53c1.69,0.07,3.46-0.08,5.3-0.42c1.85-0.34,3.77-0.87,5.75-1.56c0.45-0.16,0.92-0.12,1.31,0.08 c0.4,0.19,0.72,0.53,0.87,0.98c0.16,0.45,0.12,0.92-0.08,1.31c-0.19,0.4-0.53,0.72-0.98,0.87c-2.16,0.76-4.28,1.34-6.33,1.71 c-2.06,0.37-4.06,0.54-5.99,0.46c-1.91-0.08-3.75-0.4-5.49-0.99c-1.68-0.57-3.28-1.38-4.77-2.47l-5.46,1.41 c1.13,1.38,2.32,2.56,3.59,3.54c1.44,1.11,2.98,1.94,4.63,2.49c1.8,0.59,3.75,0.84,5.85,0.71c2.12-0.13,4.4-0.65,6.85-1.57 c0.44-0.17,0.91-0.14,1.31,0.04c0.4,0.18,0.73,0.52,0.9,0.96c0.17,0.44,0.14,0.91-0.04,1.31c-0.18,0.4-0.52,0.73-0.96,0.9 c-2.82,1.07-5.47,1.66-7.96,1.8c-2.5,0.14-4.84-0.16-7.02-0.88c-2.09-0.69-4.03-1.76-5.83-3.17c-1.69-1.33-3.26-2.97-4.71-4.89 c-0.49,0.2-0.99,0.41-1.51,0.62c-0.41,0.17-0.83,0.34-1.26,0.51c1.12,1.61,2.29,3.04,3.5,4.29c1.34,1.39,2.72,2.55,4.14,3.48 c1.29,0.84,2.59,1.49,3.91,1.92c1.28,0.42,2.56,0.65,3.84,0.67l0.11-0.02l0.04,0c0.05-0.01,0.09-0.01,0.13-0.01 c4.35-0.23,7.99-0.77,10.98-1.69c2.96-0.91,5.3-2.19,7.08-3.92c1.67-1.63,2.88-3.68,3.7-6.24c0.78-2.44,1.19-5.33,1.3-8.73 l-7.54,1.47L85.28,72.59L85.28,72.59z M86.57,91.21l1.75,15.59c0.05,0.46-0.1,0.91-0.37,1.25c-0.27,0.34-0.68,0.58-1.15,0.63 l-0.02,0c-0.46,0.05-0.91-0.1-1.25-0.37c-0.34-0.27-0.58-0.68-0.63-1.15l-1.78-15.84c-1.37-0.12-2.73-0.42-4.07-0.89 c-1.49-0.52-2.96-1.26-4.39-2.2c-1.67-1.1-3.31-2.47-4.87-4.11c-1.47-1.54-2.87-3.31-4.19-5.29c-0.77,0.28-1.54,0.54-2.29,0.78 c-0.89,0.29-1.75,0.54-2.58,0.77l-0.24,0.06c1.57,2.8,3.3,4.92,5.06,6.65c1.88,1.85,3.8,3.25,5.58,4.54 c2.64,1.93,5.01,3.66,6.7,6.18c1.7,2.54,2.68,5.83,2.51,10.85c-0.02,0.47-0.22,0.9-0.54,1.2c-0.32,0.3-0.76,0.48-1.23,0.46 c-0.47-0.01-0.9-0.22-1.2-0.54c-0.3-0.32-0.48-0.76-0.46-1.23c0.14-4.14-0.67-6.85-2.07-8.92c-1.41-2.09-3.45-3.58-5.73-5.23 c-1.97-1.44-4.1-2.99-6.2-5.09c-2.06-2.06-4.09-4.63-5.92-8.12c-1.26,0.2-2.47,0.31-3.6,0.29c-1.24-0.01-2.38-0.17-3.43-0.48 c-2.2-0.12-4.31-0.34-6.31-0.71c-2.03-0.37-3.94-0.88-5.71-1.55c-1.72-0.66-3.32-1.47-4.76-2.48c-1.37-0.95-2.61-2.06-3.69-3.36 c-1.42,0.18-2.81,0.3-4.18,0.34c-1.46,0.04-2.89,0-4.28-0.13c-1.52-0.14-3-0.4-4.43-0.77c-1.43-0.37-2.82-0.87-4.16-1.49 c-2.1-0.98-3.8-2.02-5.2-3.16c-1.41-1.16-2.52-2.42-3.41-3.84c-0.87-1.39-1.52-2.91-2.03-4.61c-0.5-1.67-0.88-3.53-1.22-5.61 c-0.63-3.88-0.73-7.42-0.41-10.67c0.32-3.27,1.08-6.25,2.17-9.01c1.08-2.75,2.48-5.27,4.12-7.62c1.63-2.35,3.48-4.53,5.46-6.62 c0.98-1.23,2.05-2.35,3.18-3.39c1.13-1.03,2.34-1.98,3.6-2.87c1.24-0.86,2.53-1.66,3.86-2.41c1.32-0.75,2.67-1.44,4.03-2.09 c4.37-3.09,8.72-5.25,13.07-6.67c4.36-1.43,8.73-2.11,13.13-2.24c4.34-0.13,8.7,0.29,13.12,1.07c4.39,0.77,8.84,1.9,13.39,3.21 c4.81-0.09,8.87,0.43,12.33,1.46c3.5,1.03,6.39,2.57,8.82,4.49c2.41,1.9,4.34,4.15,5.97,6.64c1.6,2.45,2.89,5.11,4.03,7.89 c1.28,1.17,2.51,2.47,3.68,3.87c1.18,1.42,2.28,2.93,3.28,4.51c1.49,2.36,2.75,4.88,3.69,7.45c0.89,2.44,1.48,4.92,1.69,7.37 c0.24,2.69,0.02,5.34-0.75,7.85c-0.72,2.33-1.92,4.52-3.69,6.5c-0.6,0.66-1.25,1.3-1.96,1.89c-0.69,0.58-1.44,1.13-2.26,1.65 c-0.1,0.07-0.21,0.14-0.33,0.19c-0.11,0.05-0.23,0.09-0.36,0.11l-2.35,0.46c-0.07,4.06-0.55,7.53-1.49,10.48 c-0.99,3.08-2.48,5.6-4.57,7.63c-2.02,1.97-4.57,3.44-7.71,4.5C94.3,90.26,90.74,90.89,86.57,91.21L86.57,91.21z"/></g></svg>`
				}
			}}
        />
    );
	
	  
}