
import React, { useState } from 'react';
import '../../css/Publications.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';
const Publications = (props) => {

	let publications = [
		{
			title: 'ParkinSense: A novel approach to non-intrusive & remote Idiopathic Parkinsonism Diagnosis, Severity Profiling, and Telemonitoring via Ensemble Learning & Multimodal Data Fusion on Webcam-Derived Digital Biomarkers',
			authors: 'Pulkith Paruchuri, Pooja Kedia',
			date: 'July 2022',
			venue: 'IEEE ICIIMBS 2022',
			link: 'https://github.com/DespicableMonkey/ParkinSense/blob/main/Paper/ParkinSense-Paper-PDF-Draft.pdf',
			type: 'Publication',
			image: 'paper1.png',
		},
		{
			title: 'Preliminary Evidence of Accurate Parkinson’s Disease Diagnosis via Eye Blink Rate and Machine Learning',
			authors: 'Pulkith Paruchuri',
			date: 'August 2022',
			venue: 'Nature Neuroscience',
			link: '',
			type: 'Pending',
			image: 'paper2.png',
		},
		{
			title: "Evaluation of Parkin-Sense as a Web-Based and contactless form of diagnosis on Authentic Parkinson's Disease Patients",
			authors: 'Pulkith Paruchuri',
			date: 'August 2022',
			venue: 'Nature Scientific Reports',
			link: '',
			type: 'Pending',
			image: 'paper3.png',
		}
	]

	publications = publications.reverse()

	let data = []
	data.push(<div className="seperator"></div>)
	for(var i = 0; i < publications.length; ++i) {
		data.push(<Pub data={publications[i]}></Pub>)
		data.push(<div className="seperator"></div>)
	}
  return (
	
    <div className="pubs">
		<PageHeader title="Publications" subtitle="View our released papers, posters, and conference discussions." />
		<div className="wrapper">
			{data}
		</div>
    </div>
  );
}

const Pub = (props) => { 
	return(
		<div className="pub">

			<div className="row">
				<div className="col-2 imgwrapper">
					<img src={require(`../../assets/paper/${props.data.image}`)} className="paperimg"></img>
				</div>

				<div className="col-8">
					<h2 className="paraLarge">{props.data.title}</h2>
					{
						props.data.type === 'Publication' ? <div className='paraReg thintext tag color1 '>{props.data.type} </div> :
						<div className='paraReg thintext tag color2'>{props.data.type} </div>
					}
					<div className="paraReg thintext tag">{props.data.venue}</div>
					<div className="paraReg thintext slate">{props.data.authors}</div>
					<div className='paraReg thintext slate'>{props.data.date}</div>
				</div>

				<div className="col-2">
					{ props.data.link.length > 0 && <GradButton text="View Publication" link={props.data.link} ex="True" /> }
				</div>
			</div>
			
		</div>
	)
}

export default Publications;