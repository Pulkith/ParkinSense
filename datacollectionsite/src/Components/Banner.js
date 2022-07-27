
import React from 'react';
import '../css/banner.css'
  
export default class PageTitle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: props.title, subtitle: props.subtitle}
	}
	render() {
		return(
			<>
			<div className="wrapper">
				<div className="img">
					<div className="faintimg">
						<h1 className="title">
							{this.state.name}
						</h1>
						<div className="divider"></div>
						<h4 className="subtitlebanner">{this.state.subtitle}</h4>
					</div>
				</div>
			</div>
			</>
		)
	}
}