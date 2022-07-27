import React from 'react'
const blazeface = require('@tensorflow-models/blazeface');

export default class Face extends React.Component{

	constructor(props) {
		super(props);
		this.videoTag = React.createRef()
		this.callback = props.callback
		this.width = props.width
		this.height = props.height
	  }
	trackAudio() {
		
	}
	componentDidMount() {


		this.trackFace()

	  }	
	render() {
		return(
			<div>
				<video ref={this.videoTag} autoPlay id="video" style={{"display":"none"}}></video>
    			<canvas id="canvas" width={this.width} height={this.height} style={{"transform": "rotateY(180deg)", "borderRadius": "3%"}}></canvas>
			</div>
		)
	}
}
