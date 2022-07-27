
import React from 'react';
import PageTitle from './Banner';
import '../css/instructions.css'
import Button from '@mui/material/Button'; 

export default function Instructions() {
  return(
	<>
	<PageTitle title="Before you Begin" subtitle="You can begin the study by clicking the button at the bottom of this page"></PageTitle>
	<div className="requirements">
		<div className="row">
			<InstructBox icon="fa-brands fa-chrome" desc={["Please ensure you are using ", <strong>Google Chrome on a laptop or desktop computer</strong>, " when completing this study."]}/>
			<InstructBox icon="fa fa-clock" desc={["This study consists of 9 tasks that should take  ", <strong>6 minutes</strong>, " all together"]}/>
			<InstructBox icon="fa-regular fa-file" desc={["By clicking 'Begin' on the this page, you consent to allow us to use your data in this study"]}/>
			<InstructBox icon="fa-solid fa-bottle-water" desc={["Make sure you are well rested, hydrated, and in a reasonably quiet room with decent lighting."]}/>
			
			
		</div>

		<TitleDivider title="Tasks Overview"></TitleDivider>
		<div className="row">
			<InstructBox icon="fa-solid fa-film" desc={["Before each task, you will be shown a short video with instructions"]}/>	
			<InstructBox icon="fa-solid fa-video" desc={["After the video, you can begin the task by preessing, 'Start Recording'. Once you are done, you can click 'End Recording'"]}/>
			<InstructBox icon="fa-solid fa-arrow-rotate-left" desc={["If you mess up, you can restart the recording by clicking 'Restart' on the sidebar"]}/>
			<InstructBox icon="fa-solid fa-download" desc={["At the end of all your tasks, you can download ", <strong>all</strong>," the data we measured from you"]}/>
		</div>
		
		<TitleDivider title="Begin Study"></TitleDivider>
		<p className="begindesc">
			When you are ready to begin, click the button below!
		</p>
		<div className="beginbtn">
			<Button variant="contained" color="success" size="large" style={{"fontSize": "2rem"}} onClick={function(){window.location.href="/Adjust"}}>
				Begin Study
			</Button>
		</div>
	</div>
	</>
  );
}

class InstructBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {icon: props.icon, desc: props.desc}
	}
	render() {
		return(
			<div className="col-md-3 col-sm-6 col-xs-6 mb-2">
				<div className="boxwrapper">
					<i className={this.props.icon + ' icon'}></i><br />
					<div className="boxdiv"></div>
					<p className="boxdesc">
						{this.props.desc}
					</p>
				</div>
			</div>
		)
	}
}

class TitleDivider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {title:props.title}
	}
	render() {
		return(
			<div className="titlewrapper">
			 			<h1 className="titledashed">
			 				{this.state.title}
			 			</h1>
			</div>
		)
	}
}