import { Grade } from '@mui/icons-material';
import React, { useState } from 'react';
import GradButton from './../../Util/GradButton';
const articles = [
	{
		"title": "Call for NJAN Papers",
		"date": "12 August 2022",
		"author": "Pulkith Paruchuri",
		"topic": "Research",
		"image": "1002.jpeg",
		"content": 
		<div>
			<p className="subheading2W">
				We invite you to submit papers for the Neurose Journal of Applied Neuroscience (NJAN) 2022 Volume 1.
				You can do so by emailing your abstract and paper(in PDF format) to <a className="blackLink" href="mailto:paruchuri@pulkith">paruchuri@pulkith</a>
				<br /><br />
				You will recieve status updates on your paper submission, including the peer review process. 
				You will likely have to revise your paper multiple times before acceptance.

				<br /><br />
				We aim to review papers in under 45 days.

				<br /><br />
				You can read previous volumes of NJAN, see example papers, and read the submission guidelines here: <a className="blackLink" href="/NJAN">NJAN (Coming in Late 2022)</a>.
			</p> 
		</div>,
		"urlslug": "1002",
		"tags" : ["Research", "NJAN", "Volume 1"],
		"color": ""
	},
	{
		"title": "Available Staff Oppenings",
		"date": "12 August 2022",
		"author": "Pulkith Paruchuri",
		"topic": "Business",
		"image": "1001.jpeg",
		"content": 
		
		<div>
			<p className="subheading2W">
				Neurose is actively looking to recruit a number of qualified and experienced individuals to join our team.
				We are looking for various roles including: Mobile Developer, Machine Learning Engineer, Neuroscience Reseacher, Graphic Designer,
				Enterprise Operations Manager, and more.
				<br /><br />
				By joining Neurose you are joining a team that is committed to advancing neuroscience research and education.
				<br /><br />
				You can learn more about our compensation, benefits, and opportunities, read FAQs, and see our current openings here: <a className="blackLink" href="/Join">Join Us</a>.

				<br /><br />

				<strong>
					To apply for a position, submit a Resume, the position you are applying for, and a short description of why you would be a good fit, to the following email address: <a className="blackLink" href="mailto:paruchuri@pulkith.com">paruchuri@pulkith.com</a>.
					<br /><br />
					A member of our team will be in touch with you shortly to schdule a meeting.
				</strong>
			</p>
		</div>,
		"urlslug": "1001",
		"tags" : ["Business", 'Staff'],
		"color": ""
	},
	{
		"title": "Neurose Site Released - R&D In Progress",
		"date": "12 August 2022",
		"author": "Pulkith Paruchuri",
		"topic": "General",
		"image": "1000.jpeg",
		"content": 
		
		<div>
			<p className="subheading2W">
				Neurose is a platform for the discovery of new and innovative ways to diagnose and treat Neurodegenerative disorders. We currently have 6 research and engineering projects in progress, aiming to diagnose and treat Parkinson's Disease and other Neurodegenerative diseases via Machine Learning.
				We are working with Stanford Medical to develop and implement some of these solutions.
				<br /><br />

				You can read about our mission, goal, and process here: <a className="blackLink" href="/About">About Us</a>.
				<br /><br />
				We are actively looking for new members to join our <a className="blackLink" href="/Team">team</a>. Learn more here: <a className="blackLink" href="/Join">Recruitment</a> 

				<br /><br />

				This website showcases our research and engineering projects, results, solutions, publications, team, and more. 
				<br /><br />
				Contact us with any questions or comments here: <a className="blackLink" href="/Contact">Contact Us</a>.


			</p>
		</div>,
		"urlslug": "1000",
		"tags" : ["R&D", "ParkinSense", "Research"],
		"color": ""
	},
	{
		"title": "",
		"date": "",
		"author": "",
		"topic": "",
		"image": "",
		"content": 
		
		<div>
			<p className="subheading2W">

			</p>
		</div>,
		"urlslug": "-1",
		"tags" : [],
		"color": ""
	},
]

export const getArticle = (id) => {
	let ret = articles[articles.length - 1];
	articles.forEach(article => {
		if(article.urlslug && article.urlslug === ""+id) {
			ret = article;
			return;
		}
	})
	return ret;
}

export const getRecentArticles = () => {
	return [
		1000,
		1001,
		1002
	]
}