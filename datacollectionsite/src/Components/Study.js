import React, { useEffect, useState } from 'react';
import '../css/study.css'
import TextField from '@mui/material/TextField';
import PageTitle from './Banner';
import Face from './face'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from '@mui/material/Button'; 
import $ from 'jquery'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import {deepPurple, pink, white} from '@mui/material/colors';

import ReactAudioPlayer from 'react-audio-player';

import demosound from '../assets/demosound.mp3'
import { useNavigate } from 'react-router-dom';

import Timeline from './Timelime'
import ReactPlayer from 'react-player'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import aVid from '../assets/aSoundVid.mp4'

import * as qs from 'query-string';

export default class Study extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			taskNum: 0,
			title: "",
			recording: false,
			initVid: false,
			videoSrc: null,
			alert: "none",
			alertText: "None",
			submitting: false,
			time: 0
		};
		this.titles = [
			"",
			"Part 1A: Vocal (a) - [30 seconds]",
			"Part 1B: Vocal (o) - [30 seconds]",
			"Part 1C: Vocal (u) - [30 seconds]",
			"Part 2A: Facial (Smile) - [30 seconds]",
			"Part 2B: Facial (Disgust) - [30 seconds]",
			"Part 2C: Facial (Suprise) - [30 seconds]",
			"Part 2D: Facial (Anger) - [30 seconds]",
			"Part 3: Speech - [1 minute]",
			"Part 4: Questions - [1 minute]"
		]
		this.taskNames = [
			"1A",
			"1B",
			"1C",
			"2A",
			"2B",
			"2C",
			"2D",
			"3",
			"4"
		]
		this.beginRecording = this.beginRecording.bind(this);
		this.endRecording = this.endRecording.bind(this);
		this.restartRecording = this.restartRecording.bind(this);
		this.getSourceRef = this.getSourceRef.bind(this);
		this.storeVideo = this.storeVideo.bind(this)
		this.storeVideo = this.storeVideo.bind(this)
		this.recorder = null;
		this.recorderData = []
		this.timerInterval = null
		this.recorderCancelled = false;
		this.maxSpeechTime = 5;
		this.timeOutTime = 120000;
	}

	

	componentDidMount() {
		this.setTask();
		this.getID()
	}	
	proceed = () => {
		this.updateTimer(0)
		this.setState({taskNum: this.state.taskNum + 1}, () => {

			if(this.state.taskNum > 9) {
				window.location.href = "/finish"
			} else {
				
				var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?task=' + this.state.taskNum;
				window.history.pushState({path:newurl},'',newurl);		
				this.setState({title: this.titles[parseInt(this.state.taskNum)]})	
				window.scrollTo({ top: 0, behavior: 'smooth' });		
					
			}

		})
	
		
	}

	setTask() {
		const parsed = qs.parse(window.location.search);
		const key = parsed.task

		if(key > 9) window.location.href = "/Home"

		this.setState({taskNum: parseInt(key)})
		this.setState({title: this.titles[parseInt(key)]})
	}

	getID() {
		var IDrandom = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
		var id = localStorage['IDval'] || 'defaultValue';

		if(id == 'defaultValue') {
			localStorage['IDval'] = '' + IDrandom;
		}
	}
	
	wait = (delayInMS) => {
		return new Promise(resolve => setTimeout(resolve, delayInMS));
	}
	updateTimer(sec) {
		this.setState({time: sec})
	}

	getRecording = (stream, timeoutLen) => {
		this.recorderCancelled = false;
		this.recorder = new MediaRecorder(stream);
		this.recorderData = [];
		this.time = 0
	  
		this.recorder.ondataavailable = event => this.recorderData.push(event.data);
		this.recorder.start();
	  
		let stopped = new Promise((resolve, reject) => {
			this.recorder.onstop = () => {
			this.recordingFinished()
			resolve()
		  };
		  this.recorder.onerror = event => reject(event.name);
		  this.setState({recording: false})
		});
	  
		let recorded = this.wait(timeoutLen).then(
		  () => {
			if(this.state.recording) {
				this.timeOutRecording()
			}
		  }
		);
		this.updateTimer(0)
		this.timerInterval = setInterval(() => {
			this.time ++;
			this.updateTimer(this.time)
		}, 1000)

		this.setState({recording: true})
			
		return Promise.all([
		  stopped,
		  recorded
		])
	}

	beginRecording = () => {
		let stream = this.state.videoSrc.current.srcObject;

		let maxtime = (this.state.taskNum == 8) ? this.maxSpeechTime * 1000 : this.timeOutTime;
		this.getRecording(stream, maxtime)
		.catch((error) => {
			if (error.name === "NotFoundError") {
				// log("Camera or microphone not found. Can't record.");
			} else {
				// log(error);
			}
		});
		
	}

	failUpload = () => {
		this.setState({submitting: false})
		window.scrollTo({ top: 0, behavior: 'smooth' });			
		this.setState({alert: "Error", alertText: "We are sorry, but the upload video failed to upload. Please re-reecord. If this happens 2 or more times, please try again after a while. "})
	}
	successUpload = () => {
		this.setState({alert: "Success", alertText: "Your video for task: " + this.taskNames[this.state.taskNum-1] + " was successfully uploaded! The Instructions below have been updated for the next task. "})
		this.proceed()
	}

	failPost = () => {
		this.setState({submitting: false})
		window.scrollTo({ top: 0, behavior: 'smooth' });			
		this.setState({alert: "Error", alertText: "We are sorry, but the submission failed to upload. Please re-submit. If this happens 2 or more times, please try again after a while. "})
	}

	timeOutRecording = () => {

		if(this.state.taskNum == 8) {
			this.endRecording();
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });			
			this.setState({alert: "Error", alertText: "Your recording was cancelled for exceeding the 120 second time limit. Please try again."})
			this.restartRecording()
		}

		
	}

	checkUploadStatus = (res) => {
		this.setState({submitting: false})
		let json = JSON.parse(res)
		if(json.response == 'video_uploaded' || json.response == 'data_submitted') {
			this.successUpload();
		} else {
			if(this.state.taskNum < 9)
				this.failUpload();	
			else
				this.failPost();	
		}
	}

	storeVideo = (vid) => {
		var data = new FormData();
		data.append('file', vid);
		data.append('personID', localStorage['IDval']);
		data.append('taskNum', this.state.taskNum);
		this.setState({submitting: true})
		  $.ajax({
			  type: "POST",
			  enctype: 'multipart/form-data',
			  url: "https://measure.parkin-sense.pulkith.com/server/downloadVideo.php",
			  data: data,
			  processData: false,
			  contentType: false,
			  cache: false,
			  timeout: 600000,
			  success: (data) => this.checkUploadStatus(data),
			  error:  (e) => this.failUpload()
		  });
	}

	storeFormResponses = (data) => {

		let setData = {}

		for(var key in data) {
			if (data.hasOwnProperty(key)) {
				if(/q[1-9]+/.test(key)) {
					setData[key] = data[key];
				}
			}
		}

		setData["personID"] = localStorage['IDval'];

		this.setState({submitting: true})
		$.ajax({
			type: "POST",
			url: "https://measure.parkin-sense.pulkith.com/server/storeQuestionResponses.php",
			data: setData,
			success: (data) => this.checkUploadStatus(data) ,
			error:  (e) => this.failPost()
		});
	}

	recordingFinished = () => {

		if(!this.recorderCancelled) {
			let recording = document.getElementById("recording");
			let recordedBlob = new Blob(this.recorderData, { type: "video/webm" });
			recording.src = URL.createObjectURL(recordedBlob);	
			this.storeVideo(recordedBlob)
		}
		
		
		// this.proceed
	}

	endRecording = () => {
		if(this.recorder.state == 'recording') {
			this.recorder.stop();
			this.setState({recording: false})
			clearInterval(this.timerInterval)
		}
	}
	restartRecording = () => {
		this.updateTimer(0)
		this.recorderCancelled = true;
		this.endRecording()
	}

	getSourceRef(src) {
		this.setState({videoSrc: src});
	}
	  
	alertClose = () => {
		this.setState({alert: "none"})
	}
 
	render(){


		return(
			<div>

		

				{this.state.taskNum == 1 && <><PageTitle title="Study" subtitle={this.titles[1]}></PageTitle><Timeline step="1" /></>}
				{this.state.taskNum == 2 && <><PageTitle title="Study" subtitle={this.titles[2]}></PageTitle><Timeline step="2" /></>}
				{this.state.taskNum == 3 && <><PageTitle title="Study" subtitle={this.titles[3]}></PageTitle><Timeline step="3" /></>}
				{this.state.taskNum == 4 && <><PageTitle title="Study" subtitle={this.titles[4]}></PageTitle><Timeline step="4" /></>}
				{this.state.taskNum == 5 && <><PageTitle title="Study" subtitle={this.titles[5]}></PageTitle><Timeline step="5" /></>}
				{this.state.taskNum == 6 && <><PageTitle title="Study" subtitle={this.titles[6]}></PageTitle><Timeline step="6" /></>}
				{this.state.taskNum == 7 && <><PageTitle title="Study" subtitle={this.titles[7]}></PageTitle><Timeline step="7" /></>}
				{this.state.taskNum == 8 && <><PageTitle title="Study" subtitle={this.titles[8]}></PageTitle><Timeline step="8" /></>}
				{this.state.taskNum == 9 && <><PageTitle title="Study" subtitle={this.titles[9]}></PageTitle><Timeline step="9" /></>}
				
				<div className="alertWrapper">
					{ this.state.alert == "Error" && <Alert onClose={() => {this.alertClose()}} severity="error" className="alertItm"> { this.state.alertText } </Alert>}
					{ this.state.alert == "Success" && <Alert onClose={() => { this.alertClose() }} severity="success" className="alertItm"> { this.state.alertText } </Alert>}

				</div>
				

					
					<div className="shortdiv" id="instructionsarea" style={{display: this.state.submitting ? 'none' : 'block'}}>
						{this.state.taskNum == 1 && <StudyInstructions text={["In this task, take a deep breath, and say ",<strong>"AHHHHH"</strong>, " as long as you can (until you run out of breath). Try your best to keep a constant volume and pitch. If you need an example, you can watch the recording below.", <VidCo src="https://www.parktest.net/instructionVideos/Task6New.mp4" />]} />}
						{this.state.taskNum == 2 && <StudyInstructions text={["In this task, take a deep breath, and say ",<strong>"OHHHHH" (as in the 'o' in rope)</strong>, " as long as you can (until you run out of breath). Try your best to keep a constant volume and pitch. ", <br/>,<br/>]} />}
						{this.state.taskNum == 3 && <StudyInstructions text={["In this task, take a deep breath, and say ",<strong>"UUUUUU" (as in the 'u' in blue)</strong>, " as long as you can (until you run out of breath). Try your best to keep a constant volume and pitch. ", <br/>,<br/>]} />}
						{this.state.taskNum == 4 && <StudyInstructions text={["In this task, ",<strong>make the biggest smile you can,</strong>, " then make a neutral face, and repeat this 3 times. Please watch the video below for an example.", <VidCo src="https://www.parktest.net/instructionVideos/Task12.MP4" /> ]}/>}
						{this.state.taskNum == 5 && <StudyInstructions text={["In this task, ",<strong>make the most disgusted face you can,</strong>, " then make a neutral face, and repeat this 3 times. Please watch the video below for an example.", <VidCo src="https://www.parktest.net/instructionVideos/Task13.MP4" />]} />}
						{this.state.taskNum == 6 && <StudyInstructions text={["In this task, ",<strong>make the most suprised face you can(moving your eyebrows up and down),</strong>, " then make a neutral face, and repeat this 3 times. Please watch the video below for an example.", <VidCo src="https://www.parktest.net/instructionVideos/Task14.MP4" />]} />}
						{this.state.taskNum == 7 && <StudyInstructions text={["In this task, ",<strong>make the most angry face you can,</strong>, " then make a neutral face, and repeat this 3 times, similar to the previous tasks."]} />}
						{this.state.taskNum == 8 && <StudyInstructions text={["In this final task, please read the following paragraphs for 1 minute.",<strong> Please read at your normal pace - you do not have to finish reading the entire passage in the one minute. If you mess up, you do not have to restart, you can simply continue.</strong>, <br />, <br/>,"For this task, the timer and controls are right under this text. Your video and microphone output are still at the bottom of the page if you would like to adjust your camera.", <br/>,<br/>]} />}

						{this.state.taskNum == 8 &&
						
						
						<>
						{ this.state.recording &&
							<span className="timerTime"><i className="fa-solid fa-circle recordTxt" ></i> Recording</span>}
							{!this.state.recording &&
								<Button variant="contained" color="success"  style={{"fontSize": "1.5rem"}} className="buttonitem" disabled={!this.state.initVid} onClick={() => this.beginRecording()}>Begin Recording</Button>
							}
							<Button variant="contained" color="error"  style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={() => this.restartRecording()}>Restart Recording</Button>
							<span className="buttonitem timerTime" id="timerTop">Time Remaining: {this.maxSpeechTime - this.state.time} seconds</span>
							<Passage />
						</>
	

						
						}

						{this.state.taskNum == 9 && <StudyInstructions text={["In this final task, please answer the short questions below"]} />}
						
						
					
						{ this.state.taskNum < 9 && 
						<>
							<h1 className="titledashed">Record</h1>
							<div className="instructiondiv" style={{"display" : (this.state.taskNum < 8 ? 'block' : 'none')}}>
								When you are ready, hit 'begin recording' below. A 'Finish recording' button will show up once begin. Click this to stop the recording once you are done. When you finish you will be sent to the next task automatically.
								<div>
									<div className="row">
										<div className="col-md-6 col-sm-12">
											<div className="facewrapper">
												{
													this.state.taskNum < 8 &&
													<Face callback={this.getSourceRef} onInit={()=>this.setState({initVid: true})}className="face" width="400px" height="400px" />
												}
												
											</div>
										</div>
										<div className="col-md-6 col-sm-12 buttonstarts">
											<h2>Status</h2>
											<video id="recording" width="160" height="120" controls style={{"display":"none"}}></video>

											
											<div className="buttonselfs">
												{ this.state.recording &&
												<div>
													<i className="fa-solid fa-circle recordTxt" ></i> Recording
												</div>

												}
												{
													!this.state.recording &&
													<Button variant="contained" color="success"  style={{"fontSize": "1.5rem"}} className="buttonitem" disabled={!this.state.initVid} onClick={() => this.beginRecording()}>
														Begin Recording
													</Button>
												}
												{this.state.recording && 
													<Button variant="contained" color="success"  style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={() => this.endRecording() }>
														Finish Recording
													</Button>
												}
												<Button variant="contained" color="error"  style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={() => this.restartRecording()}>
													Restart Recording
												</Button>
												<span className="buttonitem" id="timerBottom">
													Time Elapsed: {this.state.time} seconds
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
						}

						{
							this.state.taskNum == 8 &&
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<Face callback={this.getSourceRef} onInit={()=>this.setState({initVid: true})}className="face" width="400px" height="400px" />
								</div>
								
							</div>
						}

						{ this.state.taskNum == 9 && <Questions onSubmit={this.storeFormResponses}/>}
					</div>

					<div className="loadingsubmit" style={{display: this.state.submitting ? 'block' : 'none'}}>
						<h2 className="submittingtxt">Submitting Task {this.taskNames[this.state.taskNum-1]}</h2>
						<h5 className="submittingtxt2">This may take 10-60 seconds depending on the video length and your network connection.</h5>
						<CircularProgress color="success" />
					</div>
			</div>
		)
	}
	
}


class StudyInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }
  render() {
    return (
      <div>
        <h1 className="titledashed">Instructions</h1>
        <div className="instructiondiv">{this.text}</div>
      </div>
    );
  }
}

class Passage extends React.Component {
	render() {
		return(
			<div className="passageDiv">
				&emsp;Have you ever wondered about toes? Why 10 toes and not 12. Why are some bigger than others? Some people can use their toes to pick up things while others can barely move them on command. Some toes are nice to look at while others are definitely not something you want to look at. Toes can be stubbed and make us scream. Toes help us balance and walk. 10 toes are just something to ponder.
				<br /><br />
				She glanced up into the sky to watch the clouds taking shape. First, she saw a dog. Next, it was an elephant. Finally, she saw a giant umbrella and at that moment the rain began to pour.
				<br /><br />
				It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM, but his boss had implored him to stay and help when it was clear they weren't going to meet the 10:00 PM target time. So, he had stayed an extra 5 hours and lost a good night's sleep for something he didn't really believe in, but he did anyway because he was afraid if he refused he might lose his job.
				<br /><br />
				According to the caption on the bronze marker placed by a Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”
				<br /><br />
				The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking him from reaching his destination. While people may have called it a "bridge", the reality was it was nothing more than splintered wooden planks held together by rotting ropes. It was questionable whether it would hold the weight of a child, let alone the weight of a grown man. The problem was there was no other way across the gully, and this played into his calculations of whether or not it was worth the risk of trying to cross it.
				<br /><br />
			</div>
		)
	}
}

function VidCo(props) {

	return (
		<>
		<br />
		<br />
		<video src={props.src} className="examplEVID" controls />
		<p className="attr">This video is from <a href="https://parktest.net" target="_blank">PARK</a></p>
		</>
	)
}

class Questions extends React.Component {

	constructor(props) {
		super(props)
		this.submitHandler = props.submitHandler
		this.state = {
			error: false,
			q1: "",
			q2: "",
			q3: "",
			q4: "",
			q5: "",
			q6: "",
			q7: ""
		}
		this.submittedOnce = false;
		this.onSubmit = props.onSubmit;
		
	}

	submit = (event) => {
		this.submittedOnce = true;
		event.preventDefault();
		if(this.checkAnswered()) {	
			this.unaswered()
		} else {
			this.onSubmit(JSON.parse(JSON.stringify(this.state)));
		}
		
		
	}
	handleRadioChange = (event) => {
		let id = "q" + event.target.getAttribute('q')
		this.setState({[id]: event.target.value}, () => {
			this.checkAnswered();
		})
		
		
	}	

	handleTextChange = (event) => {

		let id = "q" + event.target.getAttribute('q')
		this.setState({[id]: event.target.value}, () => {
			this.checkAnswered();
		})
	}

	checkAnswered = () => {
		if(!this.submittedOnce) return;
		let hasOneError = false
		if(this.state.q1.trim().length > 0) {
			this.setState({error1: false})
			$("#QW1").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error1: true})
			$("#QW1").addClass("noanswer")
		}

		if(this.state.q2.trim().length > 0) {
			this.setState({error2: false})
			$("#QW2").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error2: true})
			$("#QW2").addClass("noanswer")
		}
		if(this.state.q3.trim().length > 0) {
			this.setState({error3: false})
			$("#QW3").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error3: true})
			$("#QW3").addClass("noanswer")
		}

		if(this.state.q4.trim().length > 0) {
			this.setState({error4: false})
			$("#QW4").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error4: true})
			$("#QW4").addClass("noanswer")
		}

		if(this.state.q5.trim().length > 0) {
			this.setState({error5: false})
			$("#QW5").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error5: true})
			$("#QW5").addClass("noanswer")
		}

		if(this.state.q6.trim().length > 0) {
			this.setState({error6: false})
			$("#QW6").removeClass("noanswer")
		} else {
			hasOneError = true;
			this.setState({error6: true})
			$("#QW6").addClass("noanswer")
		}

		if(hasOneError) {
			this.setState({error: true})
		} else {
			this.setState({error: false})
		}

		return hasOneError;
	}

	unaswered = () => {
		this.setState({error: true})
		window.scrollTo({ top: 0, behavior: 'smooth' });				
	}
	

	render() {
		return (
      <div className="qWrapper">
		{ this.state.error &&
			<Alert severity="error" className="alertItm"> { "Please answer all Questions!" }  </Alert>
		}
		
        <form onSubmit={this.submit}>
          <FormControl error={true}>
            <div className="qQwrapper" id="QW1">
              <div className="qQuest"> 1. Do you have Parkinson's Disease?<span className="star">*</span></div>
				<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
					<FormControlLabel value="yes" control={<Radio inputProps={{'q': '1',}}/>} label="Yes" onChange={this.handleRadioChange}/>
					<FormControlLabel value="no" control={<Radio inputProps={{'q': '1',}}/>} label="No" onChange={this.handleRadioChange}/>
				</RadioGroup>
				{this.state.error1 && <span className="reeqTxt">This is a required question</span>}
            </div>

			<div className="qQwrapper" id="QW2">
              <div className="qQuest"> 2. Gender<span className="star">*</span></div>
				<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
					<FormControlLabel value="female" control={<Radio inputProps={{'q': '2',}}/>} label="Female" onChange={this.handleRadioChange}/>
					<FormControlLabel value="male" control={<Radio inputProps={{'q': '2',}}/>} label="Male" onChange={this.handleRadioChange}/>
					<FormControlLabel value="other" control={<Radio inputProps={{'q': '2',}}/>} label="Other" onChange={this.handleRadioChange}/>
				</RadioGroup>
				{this.state.error2 && <span className="reeqTxt">This is a required question</span>}
            </div>

			<div className="qQwrapper" id="QW3">
              <div className="qQuest"> 3. Age<span className="star">*</span></div>
				<TextField id="outlined-basic" label="Age(numbers only)" type="number" variant="outlined" fullWidth inputProps={{'q': '3'}} onChange={this.handleTextChange}/>
				{this.state.error3 && <span className="reeqTxt">This is a required question</span>}
            </div>

			<div className="qQwrapper" id="QW4">
              <div className="qQuest"> 4. For how many years have you had Parkinson's Disease? (or since what year e.g. 2019). If you do not have Parkinson's please enter '-1'<span className="star">*</span></div>
				<TextField id="outlined-basic" label="Year or number of years" variant="outlined" fullWidth inputProps={{'q': '4'}} onChange={this.handleTextChange}/>
				{this.state.error4 && <span className="reeqTxt">This is a required question</span>}
            </div>

			<div className="qQwrapper" id="QW5">
              <div className="qQuest"> 5. For how many years have you had had symptoms of Parkinson's Disease? (or since what year e.g. 2019). If you do not have Parkinson's please enter '-1'<span className="star">*</span></div>
				<TextField id="outlined-basic" label="Year or number of years"  variant="outlined" fullWidth inputProps={{'q': '5'}} onChange={this.handleTextChange}/>
				{this.state.error5 && <span className="reeqTxt">This is a required question</span>}
            </div>
			<div className="qQwrapper" id="QW6">
              <div className="qQuest"> 6. One a scale of 1-10, how intuitive was this web application to use (with '10' meaning very intuitive)?<span className="star">*</span></div>
				<TextField id="outlined-basic" label="Year or number of years"  variant="outlined" fullWidth inputProps={{'q': '6'}} onChange={this.handleTextChange}/>
				{this.state.error6 && <span className="reeqTxt">This is a required question</span>}
            </div>
			<div className="qQwrapper" id="QW7">
              <div className="qQuest"> 7. Anything you would like us to note, or any feedback?</div>
				<TextField id="outlined-basic" label="Additional Info"  variant="outlined" fullWidth multiline rows="2" inputProps={{'q': '7'}} onChange={this.handleTextChange}/>
            </div>
			


            <Button
              variant="contained"
              color="success"
              style={{ fontSize: "1.5rem" }}
              className="buttonitem"
              onClick={() => {}}
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );

	}
}