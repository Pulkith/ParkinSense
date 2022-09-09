
import React, { useState } from 'react';

import '../../css/Common.css';
import '../../css/Projects.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';

const Projects = (props) => {

  let projects = [
    {
      "title": "Idopathic Parkinson's Disease Diagnosis, Severity Profiling, and Telemonitoring via Machine Learning ",
      "description": "A novel approach to Parkinson's Disease diagnosis entirely via a Mobile Application using Machine Learning. We are currently setting up multi-regional clinical trials to test our algorithims, after we achieved 99.7% accuracy on synthetic patients.",
      "stage": "Late Research",
      "image": "model.png"
    },
    {
      "title": "A mobile application for the diagnosis of Parkinson's Disease via Machine Learning Analysis of Cardinal Symptom ",
      "description": "Our MAD team is currently developing a mobile application using the machine learning algorithim developed by Neurose to diagnose individuals for Parkinson's Disease. Such an application reduces the cost, time, and effort required to diagnose a patient for Parkinson's Disease, making it accessible to those in rural or third-world countries. It is the first public application developed to provide contactless, rapid, and accurate diagnosis. ",
      "stage": "Early Development",
      "image": "mad.jpeg"
    },
    {
      "title": "Eye saccades as a digital biomarker for Parkinson's Disease in use for Diagnosis ",
      "description": "Using eye saccades(rapid eye movement) dervied from a digital reading task, to use for rapid diagnosis of Parkinson's Disease. These include both vertical and horizontal saccades. ",  
      "stage": "Preliminary Research",
      "image": "ebr.webp"
    },
    {
      "title": "Preliminary Evidence of the Effectiveness of Eye Blink Rate as a Dense Information Digital biomarker for Rapid Parkinson's Disease Diagnosis",
      "description": "Using a simple metric - Eye Blink Rate - as a digital biomarker for rapid diagnosis of Parkinson's Disease. Calculated via Machine Learning on a regular 720p video stream from 3 tasks: reading, conversation, and television. ",
      "stage": "Preliminary Research",
      "image": "saccade.png"
    },
    // {
    //   "title": "",
    //   "description": "",
    //   "stage": "",
    //   "image": ""
    // },

    
  ]

  let projs = []

  for(var i = 0; i < projects.length; ++i) {
    projs.push(<ProjectItem title={projects[i].title} description={projects[i].description} stage={projects[i].stage} image={projects[i].image} />)
  }

  return (
	
    <div className="njas">
		<PageHeader title="Projects" subtitle="View our ongoing projects and research studies" />
		  <div className="sec2">
        <div className="regwrapper">
          <div className="row">
            {projs}
          </div>
        </div>
		  </div>
    </div>
  );
}



const ProjectItem = (props) => {
  return(
    <div className="project col-6">
      <div className="projectwrapper">
        <div className="imgwrapper">
          <img className="img" src={require(`../../assets/projects/${props.image}`)}></img>
        </div>
        <div className="contentwrapper">
         <div className="subheadingEx1">{props.title}</div>
          <br />
          <div className='paraReg thintext tag color2'> {props.stage} </div>
          <div className="subheading2 desc">{props.description}</div>
          </div>   
      </div>
    </div>
  )
}


export default Projects ;