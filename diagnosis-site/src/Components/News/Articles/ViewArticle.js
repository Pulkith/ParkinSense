
import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import {getArticle} from './articles.js'

import '../../../css/Common.css';
import '../../../css/news.css'
import PageHeader from './../../Util/PageHeader';
import GradButton from './../../Util/GradButton';

const ViewArticle = (props) => {
	let { id } = useParams(); 

	const data = getArticle(id);
	

	let tags = []

	data.tags.forEach(tag => {
		tags.push(<div style={{marginTop: "10px"}}><div className="tag">{tag}</div></div>)
	});

  return (
	
    <div className="newsarticle">
		<div className="">
			<div className="">
				<div className="topheader">
					<img src={require(`../../../assets/news/${data.image}`)} alt=""/>
					<div className="overlay">
						<div className="titlecontainer newsregwrapper">
							<div className="row">
								<div className="col-md-10 col-12">
									<div className="category headinggrad">{data.topic}</div>
									<div className="headingSmall title">{data.title}</div>
									<div className="subheading1 date newsheadertopmargin">{data.date}</div>
									<div className="subheading1 author">By {data.author}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sec1">
					<div className="centerwrappercontainer">
						<div className="newsregwrapper">
							<div className="row padding">
								<div className="content col-md-10 col-12 padright">
									{data.content}
								</div>
								<div className="sidebar col-md-2 col-12">
									<div className="subheading3">Category</div>
									<div className="category headinggrad">{data.topic}</div>
									<br/><br/>
									<div className="subheading3">Tags</div>
									{tags}
									<br/>
									<br/>
									{/* <GradButton text="Copy Share Link" /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}


export default ViewArticle; ;