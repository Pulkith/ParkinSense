import React, { useState } from 'react';

export default function VisitBtn(props){

	let target = (props.ex) ? "_blank" : "_self";

	return (
		<div className="visitLink">
			<a href={props.link} className="link" target={target}>
				<span className="text">
					{props.text}
				</span>
			</a>
		</div>
	)
}