import React from "react";
import "../css/home.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [
            "Who can Access my Data?",
            "Who should participate in this study?",
            "Is there any compensation for completing this study",
            "What if I want to be contact for the results of the study?",
            "How do I contact the study investigators?",
            "How can I ensure my data is secure?",
            "Can I access my data afterwards?",
            "Can I withdraw or delete my data after I finish the study?",
            "What do I need for this study?",
            "Why are we asking for this data?",
            "Why if there is no video/microphone output when recording tasks?",
            "How do I know if my submission was successful?",
        ];
        this.answers = [
            "A: Only the team of reseachers can access your data. Under no circumstances will this data be shown outside of this lab to other individuals.",
            "We are looking for both Parkinson's Patients, and those without Parkinson's, so that we can accurately differentiate betweene those with Parkinson's, and those without, in our diagnosis tool! While we are mostly seeking those over the age of 45, we welcome all ages!",
            "Unfortuntely, we are not able to offer compensation at this time. ",
            "You can subscribe to updates and be contacted about this study, by signing up in the footer ",
            "You can email or call us at the contact information in the footer.",
            "We have taken numerous measures to ensure your data is secure, including encrypted lines of transfer through SSL, and through encrypting your data in our server",
            "You can email us anytime at the email in the footer, to see your data. You can also download your data at the of all the tasks.",
            "You can withdraw your data, and ask for it to be deleted, by contacting the study authors in the footer of this page.",
            "For this study, all you need is a computer with google chrome, a quiet & well-lit area, and 6 minutes of time!",
            "We are trying to create an entirely contactless method if diagnosis, that relies only on microphone and video data, using machine learning. Our machine learning algorithims need to be trained on some data, which we are asking from you!",
            "At the bottom of each task, you are able to see if your video / microphone is working. If there is no output, you may have to change your input source in settings, or move closer to your computer.",
            "After each task, a success/error message should show up regarding the success of your video submission. We have not run into any situations wheree a video failed to submit so far.",
        ];
    }

    render() {
        let FAQS = [];

        for (var i = 0; i < this.questions.length; ++i) {
            FAQS.push(
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Q: {this.questions[i]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>A: {this.answers[i]}</Typography>
                    </AccordionDetails>
                </Accordion>
            );
        }

        return (
            <div className="bg">
                <div className="row">
                    <div className="landing">
                        <div className="img-cover">
                            <div className="row">
                                <div className="">
                                    <h1 className="titlemajor green">
                                        Parkin-Sense
                                    </h1>
                                </div>
                                <div className="dividerx"></div>
                                <div className="">
                                    <h3 className="subtitle">
                                        Measurment Portal
                                    </h3>
                                </div>
                                <div className="">
                                    <h4 className="lg-desc">
                                        The{" "}
                                        <em>Parkin-Sense Measurement Portal</em>{" "}
                                        enables reseachers to develop diagnosis
                                        and treatment tools by measuring certain
                                        symptoms of Parkinson's Disease from{" "}
                                        <span className="textgrad">
                                            anyone, anywhere, anytime.
                                        </span>
                                    </h4>
                                </div>
                            </div>

                            <div className="centerdiv">
                                <a href="/Instructions" className="begin">
                                    Begin Study
                                    <i className="fa-solid fa-arrow-right nxt-icm"></i>
                                </a>
                            </div>
                            <div className="lrnmorewrapper bounce">
                                <span className="lrn-more">Learn More</span>
                                <a href="#call" className="scroll-down">
                                    <i className="fa-solid fa-chevron-down scroll-icn"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-brain3">
                        <div className="img-cover-4">
                            <div classname="row">
                                <div className="col-md-12 mx-auto adjustdesc">
                                    <h1
                                        id="call"
                                        className="titlebase headerspacing textgrad2"
                                    >
                                        Call for Volunteers
                                    </h1>
                                    <p className="desc">
                                        We are looking for Parkinson's patients
                                        to complete this 6 minute study, to help
                                        develop the world's first public,
                                        accessible, contactless, and affordable method
                                        of Parkinson's Disease diagnosis for
                                        millions worldwide. We also welcome
                                        those without Parkinson's to complete
                                        this study as we need data from controls
                                        too! We are largely looking for those
                                        older than 45, but all ages are welcome!
                                        <br />
                                        <br />
                                        If you or anyone you know suffers from
                                        Parkinson's Disease, we kindly ask you
                                        to complete this short study/send this
                                        website to them. By doing so you are
                                        helping create the next generation of
                                        diagnosis tools!
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h1
                                        id="mission"
                                        className="titlebase headerspacing textgrad2"
                                    >
                                        Mission
                                    </h1>
                                    <p className="desc">
                                        Parkin-Sense is a collaborative effort
                                        by a team of reseachers to create a
                                        novel method of diagnosis for
                                        Parkinson's Disease that is entirely
                                        virtual and contactless. We aim to
                                        create a web application that is able to
                                        diagnose Parkinson's Disease through
                                        only a microphone and webcam.
                                        <br />
                                        <br />
                                        Parkin-Sense was inspired by the current
                                        shortcomings of Parkinson's Disease
                                        Diagnosis Methods:
                                    </p>
                                    <ul className="list-1">
                                        <li>
                                            A lack of universal access to
                                            Parkinson's Disease, especially in
                                            3rd world regions, and aggravated
                                            due to the Covid-19 pandemic
                                        </li>
                                        <li>
                                            The costs associated with
                                            Parkinson's Disease Diagnosis,
                                            especially in countries without free
                                            healthcare, such as the US
                                        </li>
                                        <li>
                                            The lack of definitive and accurate
                                            methods of diagnosis
                                        </li>
                                        <li>
                                            The difficulty to track the
                                            progression of the disease,
                                            espcially on a week-to-week basis.
                                        </li>
                                        <li>
                                            Long Diagnosis Tests with turnaround
                                            periods of multiple days
                                        </li>
                                    </ul>
                                    <div className="desc">
                                        This study is led by a group located in
                                        Dallas, and includes reseachers from the
                                        following instituitions at the forefront
                                        of Parkinson's Disease Research:
                                        <br />

										<div className="row">
											<div className="col-12">
													<img
													className="sponsorlogo"
													src="https://www.pngkey.com/png/detail/281-2816800_princeton-university-logo-vector-logo-princeton-university.png"
												></img>
												<img
													className="sponsorlogo"
													src="https://identityguide.hms.harvard.edu/files/hmsidentityguide/files/hms_logo_final_rgb.png?m=1580238232"
												></img>
												
											</div>
											<div className="col-12">
												<img
														className="sponsorlogo"
														src="https://www.feinberg.northwestern.edu/communications/images/feinberg-logo.jpg"
													></img>
													<img
													className="sponsorlogo"
													src="https://identityguide.unt.edu/sites/default/files/lettermark_one-line_diving_eagle_green_0.png"
													></img>
											</div>
											<div>
												
											<img
												className="sponsorlogo"
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UT_Southwestern_Medical_Center_logo.svg/2560px-UT_Southwestern_Medical_Center_logo.svg.png"
											></img>
											<img
												className="sponsorlogo"
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lockheed_Martin_logo.svg/2560px-Lockheed_Martin_logo.svg.png"
											></img>
											</div>
										</div>
                                        
                                      
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="titlebase headerspacing textgrad2">
                                        FAQ
                                    </h1>
                                    <div className="accord">{FAQS}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />

                    <div className="row bg-brain" id="overview">
                        <div>
                            <div className="row img-cover2">
                                <h1 className="titlebase headerspacing textgrad2">
                                    Study Overview
                                </h1>
                                <div className="col-md-12 mx-auto">
                                    <p className="desc">
                                        The study aims to create an online
                                        diagnosis, and severity tracking tool,
                                        that can be access anywhere in the
                                        world, by anyone, at anytime, for free.
                                        We aim to provide accurate diagnosis
                                        results for Parkinson's Disease, within
                                        5 minutes of beginning the diagnosis.
                                        Most importantly we are pursuing to
                                        create the world's first pubicly
                                        available accurate diagnosis tool, that
                                        uses nothing more than a webcam, a
                                        microphone, and basic question.
                                        <br /> <br />
                                        We requst those with Parkinon's, and{" "}
                                        <strong>those without</strong> to
                                        complete this study, so that we can
                                        train Machine Learning models to predict
                                        between Parkinson's and non-Parkinson's
                                        patients. We hope to release the trained
                                        models as a web application by late
                                        2022.
                                        <br /> <br />
                                        To accomplish this mission, we employ
                                        various cutting-edge Machine Learning
                                        Algorithims, coupled with libraries and
                                        technologies built in-house. We also use
                                        some public packages developed by
                                        organizations, such as Google, that are
                                        used in various technologies, such as
                                        Tesla's self driving cars.
                                        <br /> <br />
                                        Since not all symptoms are present in
                                        every Parkinson's patient, we must test
                                        multiple symptoms. This is one of the
                                        first attempts of this globally. The
                                        diagnosis involves testing three groups
                                        of symptoms that can be analyzed
                                        virtually. These symptom groups are:
                                    </p>
                                    <ul className="list-1">
                                        <li>
                                            <strong>Facial Masking</strong>:
                                            From the video data we extract
                                            information about the activation of
                                            various muscle groups, as the user
                                            makes facial expressions.
                                            Parkinson's Disease patients
                                            typically have a lower magnitude of
                                            activation for most muscle groups.
                                        </li>
                                        <li>
                                            <strong>Eye Movement: </strong> From
                                            the video data, we also extract
                                            information about the blink rate
                                            while reading passages, the length
                                            of blinks, the steadiness of the eye
                                            as it traverses the screen, the
                                            speed of the eye, and more.
                                        </li>
                                        <li>
                                            <strong>
                                                Speech Irregularities:{" "}
                                            </strong>{" "}
                                            From the audio data, we calculate
                                            various metrics regarding
                                            characteristics of one's voice while
                                            they read passages and sound vowels.
                                            This includes features such as
                                            shimmer and rate.
                                        </li>
                                    </ul>
                                    <p className="desc">
                                        For those curious, a overview of our
                                        models can be found{" "}
                                        <a
                                            href="https://www.canva.com/design/DAE0ubjlDbU/luP0kJL-SjJ1v5cSka_EPw/view?utm_content=DAE0ubjlDbU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                            target="_blank"
                                        >
                                            here
                                        </a>
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row bg-brain2" id="proccess">
                        <div className="img-cover-3">
                            <h1 className="titlebase headerspacing textgrad2">
                                The Process
                            </h1>
                            <div className="row">
                                <div className="col-md-12 mx-auto ">
                                    <p className="desc">
                                        When completing the study, please ensure
                                        that you are well hydrated, not too
                                        tired, and in a reasonably quiet place.
                                        We ask that you be in a place with
                                        decent lighting, that your entire head
                                        and upper chest is in the frame, and
                                        that you face the camera (like a
                                        passport photo or portrait).
                                        <br /> <br />
                                        Please use Google Chrome while
                                        completing the study.
                                        <br /> <br />
                                        When a participant begins the study,
                                        this is the proccess they will go
                                        through. The entire proccess should take
                                        less than 6 minutes.
                                    </p>
                                    <ol className="list-1">
                                        <li>
                                            The participant will be asked to
                                            enable access for their microphone
                                            and video
                                        </li>
                                        <li>
                                            Before the start of each of the next
                                            steps, the participant will be shown
                                            a short video with instructions, and
                                            will have time to adjust their
                                            camera.
                                        </li>
                                        <li>
                                            The participant will be asked to
                                            read a short passage for 1 minute.
                                        </li>
                                        <li>
                                            The participant will be to say the
                                            vowel 'a' 3 times
                                        </li>
										<li>
                                            The participant will be to say the
                                            vowel 'u' 3 times
                                        </li>
                                        <li>
                                            The participant will be to say the
                                            vowel 'o' 3 times
                                        </li>
                                        <li>
                                            The participant will be to smile 3
                                            times
                                        </li>
                                        <li>
                                            The participant will be to make an
                                            angry face 3 times
                                        </li>
                                        <li>
                                            The participant will be to make a
                                            disgusted face 3 times
                                        </li>
                                        <li>
                                            The participant will be to make a
                                            suprised face 3 times
                                        </li>
										<li>
                                            The participant will be to read a short passage
                                        </li>
										
										
                                        <li>
                                            The participant will be asked a few
                                            basic questions, such as how long
                                            ago they developed Parkinson's and
                                            their age.{" "}
                                    
                                        </li>
                                    </ol>
                                    <p className="desc">
                                        At the end, participants can download
                                        all the data we collected from them, and
                                        opt-in to recieve updates about this
                                        program(We promise we won't spam, we
                                        hate spam too!)
                                    </p>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    workaccord() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    componentDidMount() {
        this.workaccord();
    }
}
