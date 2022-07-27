import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default class Loader extends React.Component {
	constructor(props) {
		super(props)
		this.text = props.text
	}
	render() {
		return (
			<div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "column", "alignItems": "center", "margin": "20px"}}>
				<CircularProgress color="secondary"/><br></br>
				<h4 style={{"color":"white"}}>{this.text}</h4>
			</div>
		)
	}
}