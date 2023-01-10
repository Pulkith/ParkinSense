import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Landing.js'
import Footer from './Footer.js'
import Header from './Header.js'
import ParkinSense from './Solutions/ParkinSense.js'
import ParkEnd from './Solutions/ParkEnd'
import NotFound from './NotFound.js'
import Team from './Company/Team.js'
import Publications from './Research/Publications.js'
import NJAN from './Research/NJAN.js'
import Partners from './Company/Partners.js'
import Contact from './Company/Contact.js'
import Join from './Company/Join.js'
import Recognition from './Company/Recognition.js'
import About from './Company/About'
import Projects from './Research/Projects'
import NewsView from './News/NewsView.js'
import ViewArticle from './News/Articles/ViewArticle.js'

const Main = () => {
  return (
	<div className="App">
			<Header />
			<div style={{minHeight: "calc(100vh - 130px)"}}>
				<Routes >
					<Route exact path='/' element={<Landing/>} ></Route>
					<Route exact path='/Landing' element={<Landing/>}></Route>
					<Route exact path='/solutions/parkinsense' element={<ParkinSense/>}></Route>
					<Route exact path='/solutions/parkend' element={<ParkEnd/>}></Route>
					<Route exact path='/Landing' element={<Landing/>}></Route>
					<Route exact path='/Team' element={<Team/>}></Route>
					<Route exact path='/Publications' element={<Publications/>}></Route>
					<Route exact path='/NJAN' element={<NJAN/>}></Route>
					<Route exact path='/Partners' element={<Partners/>}></Route>\
					<Route exact path='/Contact' element={<Contact/>}></Route>
					<Route exact path='/Join' element={<Join/>}></Route>
					<Route exact path='/Recognition' element={<Recognition/>}></Route>
					<Route exact path='/About' element={<About/>}></Route>
					<Route exact path='/Projects' element={<Projects/>}></Route>
					<Route exact path='/News' element={<NewsView/>}></Route>
					<Route exact path='/News/:id' element={<ViewArticle/>}></Route>
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</div>
			<Footer></Footer>
	</div>
  );
}

export default Main;
