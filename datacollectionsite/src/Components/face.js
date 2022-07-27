import React from 'react'
import '../css/face.css'
import Loader from './Loader'
const blazeface = require('@tensorflow-models/blazeface');

export default class Face extends React.Component{

	constructor(props) {
		super(props);
		this.videoTag = React.createRef()
		this.callback = props.callback
		// this.width = props.width
		// this.height = props.height

		this.width = "4000px";
		this.height = "4000px";

		this.framewidth = "500px"
		this.frameheight = "280px";
		this.onInit = props.onInit
	  }
	trackFace() {
		let video = document.getElementById("video");
		let model;
		// declare a canvas variable and get its context
		let canvas = document.getElementById("canvas");
		let loader = document.getElementById("loader")
		let ctx = canvas.getContext("2d");
		let loaded = false;
		const setupCamera = () => {
		  navigator.mediaDevices
			.getUserMedia({
			  video: { width: this.width.replace(/\D/g,''), height: this.height.replace(/\D/g,'') },
			  audio: true,
			})
			.then((stream) => {
				if(this.videoTag.current == null) return
				this.videoTag.current.srcObject = stream
				this.videoTag.current.volume = "0.0000001"


				this.callback(this.videoTag)

				const audioContext = new AudioContext();
				const analyser = audioContext.createAnalyser();
				const microphone = audioContext.createMediaStreamSource(stream);
				const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
			
				analyser.smoothingTimeConstant = 0.8;
				analyser.fftSize = 1024;
			
				microphone.connect(analyser);
				analyser.connect(scriptProcessor);
				scriptProcessor.connect(audioContext.destination);
				scriptProcessor.onaudioprocess = function() {
				  const array = new Uint8Array(analyser.frequencyBinCount);
				  analyser.getByteFrequencyData(array);
				  const arraySum = array.reduce((a, value) => a + value, 0);
				  const average = arraySum / array.length;
					const vol = average / 6

					const allPids = [...document.querySelectorAll('.pid')];
					const numberOfPidsToColor = Math.round(vol);
					const pidsToColor = allPids.slice(0, numberOfPidsToColor);
					for (const pid of allPids) {
						
						pid.style.backgroundColor = "#e6e7e8";
					}
					for (const pid of pidsToColor) {
						pid.style.backgroundColor = "#69ce2b";
					}
				};
			});

			
		};
		
		

		const detectFaces = async () => {

		
		//   const prediction = await model.estimateFaces(video, false);

		  this.onInit()
		
		  if(!loaded) {
			loader.style.display = 'none'
		  	canvas.style.display = 'block'
			loaded = true;
		  }
		  
		
		  // draw the video first

		  ctx.drawImage(video, 0, 0, this.framewidth.replace(/\D/g,''), this.frameheight.replace(/\D/g,''));
		
		//   prediction.forEach((pred) => {
			
		// 	// draw the rectangle enclosing the face
		// 	ctx.beginPath();
		// 	ctx.lineWidth = "4";
		// 	ctx.strokeStyle = "blue";
		// 	// the last two arguments are width and height
		// 	// since blazeface returned only the coordinates, 
		// 	// we can find the width and height by subtracting them.
		// 	ctx.rect(
		// 	  pred.topLeft[0],
		// 	  pred.topLeft[1],
		// 	  pred.bottomRight[0] - pred.topLeft[0],
		// 	  pred.bottomRight[1] - pred.topLeft[1]
		// 	);
		// 	ctx.stroke();
			
		// 	// drawing small rectangles for the face landmarks
		// 	ctx.fillStyle = "red";
		// 	pred.landmarks.forEach((landmark) => {
		// 	  ctx.fillRect(landmark[0], landmark[1], 5, 5);
		// 	});
			
		//   });
		};
		
		setupCamera();
		video.addEventListener("loadeddata", async () => {
		  model = await blazeface.load();
		  // call detect faces every 100 milliseconds or 10 times every second
		  setInterval(detectFaces, 50);
		});
	}

	colorPids(vol) {
		// const allPids = [...document.querySelectorAll('.pid')];
		// const numberOfPidsToColor = Math.round(vol / 10);
		// const pidsToColor = allPids.slice(0, numberOfPidsToColor);
		// for (const pid of allPids) {
		//   pid.style.backgroundColor = "#e6e7e8";
		// }
		// for (const pid of pidsToColor) {
		//   // console.log(pid[i]);
		//   pid.style.backgroundColor = "#69ce2b";
		// }
	}

	componentDidMount() {


		this.trackFace()

	  }	
	render() {
		return(
			<div >
				<h1 className="titledashed h5">
					Webcam
				</h1>
				<div id="loader">
					<Loader text="Starting Webcam..."></Loader>
				</div>
				
				<video ref={this.videoTag} autoPlay playsInline id="video" style={{"display":"none"}} ></video>
    			<canvas id="canvas" width={this.framewidth} height={this.frameheight} style={{"transform": "rotateY(180deg)", "borderRadius": "3%", "display": "none"}}></canvas>
				<h1 className="titledashed h5">
					Audio
				</h1>
				<div className="pids-wrapper" style={{"width": this.framewidth}}>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
					<div className="pid"></div>
				</div>
			</div>

		)
	}
}
