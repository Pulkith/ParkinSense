


import React, { useState } from 'react';

import '../../css/Common.css';
import PageHeader from './../Util/PageHeader';
import GradButton from './../Util/GradButton';
import '../../css/recognition.css'

const Recognition = (props) => {
  return (
	
    <div className="recognition">
		<PageHeader title="Awards and Recognition" subtitle="Or global recognition and awards" />
		{/* <div className="sec1">
            <div className='regwrapper'>
                <h2 className="headingSmall">News Recognition</h2>
            </div>


        </div> */}
        <div className="sec1">
            <div className='regwrapper'>
            <h2 className="headinggrad">Award-Winning Solutions</h2>
                <h2 className="headingSmall">Awards</h2>
                <br /><br />
                <div className="row leftrightmargin">
                    <div class="col-6 nopad padright centervert">
                        <h2 className="subheading1">Young Tycoons Business Challenge</h2>
                        <p className="subheading2">First place out of 12,000+ teams in the world's largest business competition and startup incubator. Recieve mentoring from Harvard Student Agencies.</p>
                    </div>
                    <div class="col-6 nopad">
                        <div className="imagewrapper">
                            <img  className="img" src={require('../../assets/awards/ytbc.png')}></img>
                        </div>
                    </div>
                </div>

                <div className="row leftrightmargin">
                <div class="col-6 nopad">
                    <div className="imagewrapper">
                        <img  className="img" src={require('../../assets/awards/diamond.png')}></img>
                    </div>
                </div>
                    <div class="col-6 nopad padleft centervert">
                        <h2 className="subheading1">Diamond Challenge</h2>
                        <p className="subheading2">Top 30 teams out of 750+ in the Social Innovation Track of the Diamond Challenge - the largest high school business competition in the US</p>
                    </div>
                </div>

                <div className="row leftrightmargin">
                    <div class="col-6 nopad padright centervert">
                        <h2 className="subheading1">Conrad Challenge</h2>
                        <p className="subheading2">Top section of teams in the Health Category of the 2022 Conrad Challenge</p>
                    </div>
                    <div class="col-6 nopad">
                        <div className="imagewrapper">
                            <img  className="img" src={require('../../assets/awards/conrad.jpeg')}></img>
                        </div>
                    </div>
                </div>

                <div className="row leftrightmargin">
                <div class="col-6 nopad">
                        <div className="imagewrapper">
                            <img  className="img" src={require('../../assets/awards/blueocean.jpeg')}></img>
                        </div>
                    </div>
                    <div class="col-6 padleft centervert">
                        <h2 className="subheading1">Blue Ocean Challenge</h2>
                        <p className="subheading2">Semifinialist in one of the world's largest business competitions.</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  );
}


export default Recognition ;