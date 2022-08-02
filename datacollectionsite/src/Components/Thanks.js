

import React from 'react';
import { useState } from 'react';
import PageTitle from './Banner';
import '../css/thanks.css'
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import $ from 'jquery'

import JSZip, { file } from 'jszip'
import JSZipUtils from 'jszip-utils'
import FileSaver from 'file-saver'

function Thanks() {
	const [down, setDown] = React.useState(false);

	function downloadLinks(data) {
		let obj = JSON.parse(data)
		if(obj.response == "files_collected"){
			downloadZip(obj.files)
		}
	}

	function downloadData() {
		setDown(true)
		$.ajax({
			type: "POST",
			url: "https://measure.parkin-sense.pulkith.com/server/get_data_links.php",
			data: {
				"personID": (localStorage['IDval'] || 'none'),
				"request": (localStorage['IDval'] || 'no-req')
			},
			success: (data) => downloadLinks(data),
			error:  (e) => setDown(false)
		});
	}
	
	const downloadZip = async (urls) => {
		const urlToPromise = (url) => {
		  return new Promise((resolve, reject) => {
			JSZipUtils.getBinaryContent(url, (err, data) => {
			  if (err) reject(err)
			  else resolve(data)
			})
		  })
		}
  
		const getExtension = (binary) => {
		  const arr = (new Uint8Array(binary)).subarray(0, 4)
		  let hex = ''
		  for (var i = 0; i < arr.length; i++) {
			hex += arr[i].toString(16)
		  }
		  switch (hex) {
			case '89504e47':
			  return 'png'
			case '47494638':
			  return 'gif'
			case 'ffd8ffe0':
			case 'ffd8ffe1':
			case 'ffd8ffe2':
			case 'ffd8ffe3':
			case 'ffd8ffe8':
			  return 'jpg'
			default:
			  return ''
		  }
		}
  
		const zip = new JSZip()
		for (const index in urls) {
		  const url = urls[index]
		  const splits = url.split('/')
		  const binary = await urlToPromise(url)
		  const extension = getExtension(binary) || url.split('.').pop().split(/#|\?/)[0]
		  const filename = `${splits[splits.length - 1]}`
		  zip.file(filename, binary, { binary: true })
		}
		await zip.generateAsync({ type: 'blob' })
		  .then((blob) => {
			FileSaver.saveAs(blob, 'Parkin-Sense_Measure_Recieved_Data.zip')
			setDown(false)
		  })
  }

	return(
		<>
		<PageTitle title="Thank You!" ></PageTitle>
		<div className="firstpara">
			Your Diagnosis has been complete. The results are below:
			<br /><br />
			<h2>Diagnosis: <strong style={{"color": "lightgreen"}}>Negative</strong></h2>
			<h2>Severity: <strong style={{"color": "lightgreen"}}>0%</strong></h2>
			<hr></hr>
			<h3>Voice Confidence: <strong style={{"color": "lightgreen"}}>99.7%</strong></h3>
			<h3>Facial Confidence: <strong style={{"color": "lightgreen"}}>98.9%</strong></h3>
			<h3>Eye Confidence: <strong style={{"color": "lightgreen"}}>99.3%</strong></h3>
			<br /><br />
			If you would like to download all the data we measured from you, you can click the button below. 
			<br /><br />
			If you would like to recieve updates, you can sign up for email updates in the footer.
			<br /><br /><br />
			<Button variant="contained" color="success" style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={downloadData}>
				{
					!down &&
					<span>Download Data (.zip)</span>
				}
				{
					down && <span>Downloading... <CircularProgress color="inherit" /></span>
				}
			</Button>
			<Button variant="contained"  style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={function(){window.location.href="/"}}>
				Submit to Neurologist
			</Button>
			<Button variant="contained"  style={{"fontSize": "1.5rem"}} className="buttonitem" onClick={function(){window.location.href="/"}}>
				Repeat Diagnosis
			</Button>
		</div>
		</>
	  );
}

export default Thanks;