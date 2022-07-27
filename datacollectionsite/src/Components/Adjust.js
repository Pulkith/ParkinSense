
import React from 'react';
import PageTitle from './Banner';
import '../css/adjust.css'
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'
import Face from './face'

function Adjust() {
		const navigate = useNavigate();
		navigator.permissions.query({ name: "camera" }).then(res => {
			if(res.state == "granted"){
				// console.log("SUCCSSS")
			} else {
				navigate('/Access');
				// console.log("NO")
			}
		});
		navigator.permissions.query({ name: "microphone" }).then(res => {
			if(res.state == "granted"){
				// console.log("SUCCSSS1")
			} else {
				navigate('/Access');
				// console.log("NO")
			}
		});
	
	function started() {
		// console.log("BEGAN")
	}
		

	return(
		<>
		<PageTitle title="Adjust Camera & Microphone" ></PageTitle>
		<div className="adjustment">

			<h3 className="request"> Finally, before the first task, please adjust your camera, and ensure your microphone is working.
			</h3>
			

			<div className="measures">
				<Face callback={started} onInit={()=>{}} className="face" width="400px" height="400px" />
			</div>

			<div className="row cardoverall">
				<EnsureCard text="Position your laptop or desktop computer on a flat surface about 2 feet from your body. Please also make sure your face is well lit." />
				<EnsureCard text="Please be seated, and ensure your entire head and upper body is in the frame, like a passport photo" />
				<EnsureCard text="Ensure you have minimal glare or shadow on your face, so that you are able to easily identify your facial features." />
				<EnsureCard text="Make sure, when you speak, the audio bar at indicates sound is detected." />
			</div>
			
			<div className="beginbtn">
				<Button variant="contained" color="success"  style={{"fontSize": "1.5rem"}} onClick={function() {window.location.href="/study?task=1"}}>
					Begin the First Task
				</Button>
			</div>
			
		</div>
		</>
	  );
}

export default Adjust;

class EnsureCard extends React.Component {
	constructor(props) {
		super(props)
		this.text = props.text
	}
	render() {
		return(
			<div className="col-md-3 col-sm-6 col-xs-12">
				<div className="checkwrapper">
					<p className="cardtxt">
						{this.text}
					</p>
				</div>
			</div>
		)
	}
}