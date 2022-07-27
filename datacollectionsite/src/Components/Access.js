
import React from 'react';
import PageTitle from './Banner';
import '../css/access.css'
import Button from '@mui/material/Button'; 
import Alert from '@mui/material/Alert'
import {
	MediaPermissionsError,
	MediaPermissionsErrorType,
	requestMediaPermissions
  } from 'mic-check';

import cb from '../assets/camerablocked.png'

export default class Access extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			alert: ""
		}
	}

	getPermissions() {
		this.state.alert = ""
		requestMediaPermissions()
		.then(() => {
			window.location.href="/Adjust"
		})
		.catch((err) => {
			console.log(err)
			const { type, name, message } = err;
			if (type === MediaPermissionsErrorType.SystemPermissionDenied) {
				this.setState({alert: "Your browser does not have access to your camera or microphone. To fix this problem allow Chrome to access your camera and microphone in System Preferences."})
			} else if (type === MediaPermissionsErrorType.UserPermissionDenied) {
				this.setState({alert: <span>This application requires access to your camera and microphone for the study. It seems like you have denied permission to the camera or micorphone. Please click the 'camera blocked'<img src={cb}></img> icon in the top right of the browser's address bar, and select 'always allow...'. Then reload the page.</span>})
			} else if (type === MediaPermissionsErrorType.CouldNotStartVideoSource) {
				this.setState({alert: "Another application, such as Zoom or another tab in your Browser, is using your camera. Please turn off other cameras before proceeding."})
				
			} else {
				this.setState({alert: "Unknown error starting camera."})
				
			}
		});
	}

	componentDidMount() {


		this.getPermissions()

	}	

	render() {
		return(
			<>
			<PageTitle title="Access Camera" ></PageTitle>
			{
				this.state.alert != '' &&
				<Alert color="error" style={{"margin": "40px"}}>{this.state.alert}</Alert>
			}
			<div className="adjustment">

				<h3 className="request"> Before we begin, please allow access to your webcam and microphone by clicking
				'allow' on the pop-up in the top left corner!
				</h3>

				<div className="beginbtn">
					{/* <Button variant="contained" color="success"  style={{"fontSize": "1.5rem"}} onClick={()=>{this.getPermissions()}}>
						Start Webcam
					</Button> */}
				</div>
			</div>
			</>
		  );
	}
}
