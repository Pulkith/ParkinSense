
import React, { useState } from 'react';

import {getArticle, getRecentArticles} from './Articles/articles.js'

import '../../css/Common.css';
import '../../css/news.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';

const NewsView = (props) => {

	const articles = getRecentArticles()

	const articleItems = []

	articles.forEach(article => {
		const articleId  = "" + article
		const itemv = getArticle(articleId)
		console.log(itemv)
		if(itemv.urlslug != -1) {
			console.log(itemv)
			articleItems.push(<ArticleTabularView article={itemv} />)
		}
	})

  return (
	
    <div className="">
		<PageHeader title="News" subtitle="" />
		<div className="">
			<div className="sec2">
				<div className="regwrapper">
					<div className="row" style={{marginBottom: "50px"}}>
						{articleItems}
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

const ArticleTabularView = (props) => {

	let tags = []

	props.article.tags.forEach(tag => {
		tags.push(<div className="tag">{tag}</div>)
	});


	return(
		<div className="col-lg-4 col-md-6 col-12 newstabularwraptop">
			<a href={`/News/${props.article.urlslug}`}>
				<div className="newstabularwrapper">
					<div className="innerwrapper">
						<div className="imgwrapper">
							<img className="img" src={require(`../../assets/news/${props.article.image}`)} alt={props.article.title} />
						</div>
						<div className="innercontentwrapper">
							<div className="tag color2">{props.article.topic}</div><br /><br />
							<h2 className="subheadingEx1">{props.article.title}</h2>  
							<p className="date subheading2">{props.article.date}</p> 
							{tags} <br />
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}


export default NewsView ;