import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js'

import Home from './Home.js';
import Instructions from './Instructions.js'
import Access from './Access'
import Adjust from './Adjust'
import Study from './Study'
import Thanks from './Thanks'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { StoreMallDirectory } from '@mui/icons-material';
import { unstable_getScrollbarSize } from '@mui/utils';
import $ from 'jquery';

const Main = () => {
	const [hide, setHide] = React.useState(false);
	function changeHide(val){
		setHide(val)
	}

  return (
	<div className="App">
		<Header />
		<Minimizer callback={(v) => changeHide(v)}></Minimizer>
		<div style={{"display": (hide ? 'none' : 'block')}}>
			<Routes> {/* The Switch decides which component to show based on the current URL.*/}
				<Route exact path='/' element={<Home/>} ></Route>
				<Route exact path='/Home' element={<Home/>}></Route>
				<Route exact path='/instructions' element={<Instructions/>}></Route>
				<Route exact path='/access' element={<Access/>}></Route>
				<Route exact path='/adjust' element={<Adjust/>}></Route>
				<Route exact path='/study' element={<Study/>}></Route>
				<Route exact path='/finish' element={<Thanks/>}></Route>
				<Route path="*" element={<Home/>} />
			</Routes>
		</div>
		<Footer />
	</div>
  );
}

export default Main;

function Minimizer(props) {

		const shouldDisplay = useWindowDisplay(props.callback);
		
		
		return (
			<div className="scrollable">
				{ shouldDisplay &&
					<div className="smallscreen">
						<h1>Please use a <strong>Laptop or Desktop Computer </strong> and Google Chrome in order to complete this study. If you get this message, while on a computer, please increase your browser window size. Thank you!</h1>
						<Button variant="contained" color="info" size="large" style={{"fontSize": "3vw"}} onClick={function(){window.location.href="/"}}>
						Head back to the Home Page
						</Button>
					</div>	
				}
			</div>
		)
}

function getWindowDimensions() {
	
	let width = $(window).width();
	let he = $(window).height();
	return {
	  "width": width,
	  "height": he
	};
  }
  
 function useWindowDisplay(callback) {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
	const location = useLocation();
	const path = location.pathname;
	const [display, setDisplay] = useState(getBool());
	
	function getBool() {
		let res = path !== '/' && !path.toLowerCase().includes("/home") && getWindowDimensions().width < 500;
		callback(res)
		return res
	}

	useEffect(() => {
	
	  function handleResize() {
		setWindowDimensions(getWindowDimensions());
		setDisplay(getBool())
	  }
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
  
	return display;
  }
  