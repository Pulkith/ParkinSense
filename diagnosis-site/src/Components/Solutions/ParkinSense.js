
import React, { useEffect, useState } from 'react';

import '../../css/Common.css';
import '../../css/ParkinSense.scss'
import PageHeader from '../Util/PageHeader';
import GradButton from './../Util/GradButton';

export default function ParkinSense() {

  const [currentword, setCurWord] = useState(0)
  const dict = ["faster", "cheaper", "more accurate", "more accessible", "more effecient"]


  useEffect(() => {
   
      
    

  })



  return (
    <>
      <PageHeader title="Parkin-Sense" subtitle="The world's first accurate and rapid method of contactless & public Parkinson's Disease Diagnosis."/>
    


      <div className="sec1">
			<div className='regwrapper'>


				<h2 className="headinggrad">What it is</h2>
				<h2 className="headingSmall">
        <div className="wordchangewrapper">
          <ul className=" wordchange">
              <li className="txt1 headingSmall"><span className="gradtext">Faster </span>&nbsp;Parkinson's Disease Diagnosis</li>
              <li className="txt2 headingSmall"><span className="gradtext">Cheaper </span>&nbsp;Parkinson's Disease Diagnosis</li>
              <li className="txt3 headingSmall"><span className="gradtext">More Accurate </span>&nbsp;Parkinson's Disease Diagnosis</li>
              <li className="txt4 headingSmall"><span className="gradtext">More Effecient </span>&nbsp;Parkinson's Disease Diagnosis</li>
              <li className="txt5 headingSmall"><span className="gradtext">More Accessible </span>&nbsp;Parkinson's Disease Diagnosis</li>
              <li className="txt1 headingSmall"><span className="gradtext">Faster </span>&nbsp;Parkinson's Disease Diagnosis</li>
          </ul> 
        </div>
      </h2>
				<p className="subheading2">
					ParkinSense is Neurose's flagship solution, offering individuals the ability to diagnose themselves for Parkinson's Disease, and assess the severity and progression of the disease. ParkinSense uses recent advances 
          in Machine Learning and Neuroscience to provide a rapid, accurate, and affordable solution to Parkinson's Disease Diagnosis. As the worlds first solution of its type, ParkinSense aims to provide millions, or even billions, with the ability to diagnose themselves with Parkinson's Disease, in less time than it takes to read a news article.
				</p>
			</div>
		</div>
    <div className="sec2">
        <div className="regwrapper">
          {/* <h2 className="headinggrad">Faster, Cheaper, Better</h2> */}
            <div className="row">
            <div className="col-6" style={{marginBottom: "100px"}}>
              <div className="maxsizeimgwrapper">
                <div className="headingSmall">More Accurate</div>  
              </div>
            </div>
            <div className="col-6 leftrightmargin padright" >
              
              <div className="subheading2">
                <br />
                Current Methods of diagnosis misdiagnose <strong className="grad">1 in 4</strong> patients. ParkinSense uses recent advances in Machine Learning to provide accuracy rates of <span className="gradtext">99.72%</span>. This accuracy rate only grows over time! Furthermore, ParkinSense is able to pick up on things too minute for a human to see.
                <br /><br />

              </div>
            </div>




            <div className="col-6 leftrightmargin padleft">
              
              <div className="subheading2">
                <br />
                Current methods of diagnosis can cost <strong className="grad">$5,000+</strong> per test. ParkinSense costs <span className="gradtext">$0</span> (progression tracking only costs $16 a month). This is because ParkinSense is a self-diagnosis solution.
                <br /><br />
                
              </div>
            </div>
                        <div className="col-6" style={{marginBottom: "100px"}}>
              <div className="maxsizeimgwrapper">
                <div className="headingSmall">Cheaper</div>
              </div>
            </div>
            <div className="col-6" style={{marginBottom: "100px"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <div className="headingSmall">More Accessible</div>  
              </div>
            </div>
            <div className="col-6 padright" style={{marginBottom: "100px"}}>
              
              <div className="subheading2">
                  Current methods of diagnosis require a <strong>trip to a hospital or clinic</strong>, with the required equipment and specially trained staff. This can make it inaccessible to billions. Parkinsense is a self-diagnosis technology, that can be used <span className="gradtext">anywhere in the world</span>, by <span className="gradtext">anyone with a smartphone</span>.
                  
                </div>
            </div>
           

            
            <div className="col-6 leftrightmargin padleft">
              <div className="subheading2">
                <br />
                Current methods of diagnosis can require <strong className="grad">hours of intensive questionning and repeated actions</strong>. Furthermore, it can take days for results to arrive. ParkinSense takes <span className="gradtext">only 3 minutes, and returns results in under a minute</span>.
                <br /><br />
                
              </div>
            </div>
            <div className="col-6" style={{marginBottom: "100px"}}>
            <div className="maxsizeimgwrapper">
                <div className="headingSmall">Faster</div>
              </div>
            </div>
            <div className="col-6" style={{marginBottom: "100px"}}>
            <div className="maxsizeimgwrapper">
                <div className="headingSmall">More Effecient</div>
              </div>
            </div>
            <div className="col-6 padright">
              <div className="subheading2">
                 Current methods of diagnosis can require invasive scans, radioactive injections, and more to diagnose. ParkinSense requires <span className="gradtext">only a smartphone and a few minutes of your time.</span>
                  
                </div>
            </div>


            

          </div>
        </div>
      </div>

      <div className="sec1">
        <div className="regwrapper">
          <h2 className="headinggrad">All-in-One Solution</h2>
          <div className="headingSmall">Read, Diagnose, Assess</div>
          <br /> <br />
          <div className="row">
            <div className="col-4">
              <div className="subheading1">1. Read</div>
              <div className="subheading3 textgray">Read a short passage for 2 minutes while your facial and vocal attributes are analyzed. All collected data is discared instantly after being analyzed to protect your privacy.</div>
            </div>
            <div className="col-4">
              <div className="subheading1">2. Diagnose</div>
              <div className="subheading3 textgray">Get diagnosed within 60 seconds of finishing your passage. You can download the report specifics to present to your neurologist if you wish to.</div>
            </div>
            <div className="col-4">
              <div className="subheading1">3. Assess</div>
              <div className="subheading3 textgray">If you test positive for Parknson's Disease, you can purchase our subscription plan, to view the severity classification, and track the progression of your severity over time.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec2">
        <div className="regwrapper">
          <h2 className="headinggrad">Why ParkinSense</h2>
          <div className="headingSmall">Proven Success</div>
          <br /> <br />

          <div className="row">
            <div className="col-4">
              <div className="fa fa-toolbox gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Developed</div>
              <br />
              <div className="subheading2">Developed by experienced researchers and developers from across the nation, with expertise in Machine Learning, Research, Mobile Development, and more.</div>
              <br />
              <br />
            </div>
            <div className="col-4">
              <div className="fa fa-vials gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Tested</div>
              <br />
              <div className="subheading2">Tested on millions of data points from hundreds of thousands of patients collected from various institutions over the last few deacades.</div>
              <br />
              <br />
            </div>
            <div className="col-4">
              <div className="fa fa-microscope gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Proven</div>
              <br />
              <div className="subheading2">Proven to be effective in interregional clinical tests, when tested on hundreds of patients.</div>
              <br />
              <br />
            </div>
            <div className="col-4">
              <div className="fa fa-user gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Supported</div>
              <br />
              <div className="subheading2">Supported by world class institutions and acclaimed faculty leading the charge on research for Parkinson's Disease and Healthcare Research.</div>
               <br />
              <br />
            </div>
            <div className="col-4">
              <div className="fa fa-newspaper gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Featured</div>
              <br />
              <div className="subheading2">Featured by numerous international news agencies as a promising application for the diagnosis of Parkinson's Disease.</div>
              <br />
              <br />
            </div>
            <div className="col-4">
              <div className="fa fa-medal gradtext" style={{fontSize: "2rem"}} ></div>
              <div className="subheading4">Awarded</div>
              <br />
              <div className="subheading2">ParkinSense has won multiple awards, from over ten thousand competitors, for both its effectiveness and its promise.</div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      
      <div className="sec1">
			<div className='sec1inneractionwrapper'>
				<h2 className="headinggrad">Get Started</h2>
				<h2 className="headingSmall">Get Diagnosed</h2>
				<br />
				<p className="subheading2">
					We are currently expecting to publicly release ParkinSense in <strong className="grad">Q4 2022</strong>. 
          {/* If you would like to get notified when ParkinSense is released, please enter your email in the footer. <br /><br /> */}
          <br /><br />

          You can help speed up the release of ParkinSense by joining our study below!
				</p>
				<br />
				<GradButton link="https://measure.parkin-sense.pulkith.com" text="Join Our Study" ex="ex" />
			</div>
		</div>
    </>
  );
}