import React, { useEffect } from 'react';
import Styles from "../../Styles/About/Detail.module.css";
import react from "../../assets/homepage/react.png";
import node from "../../assets/homepage/nodejs.png";
import express from "../../assets/homepage/express.png";
import mongodb from "../../assets/homepage/mongodb.png";
import js from "../../assets/homepage/js.png";
import css from "../../assets/homepage/css.png";
import bootstrap from "../../assets/homepage/bootstrap.png";
import git from "../../assets/homepage/git.png";
import vscode from "../../assets/homepage/vscode.png";
import postman from "../../assets/homepage/postman.png";
import html from "../../assets/homepage/html.png";
import Aos from 'aos';

const Detail = () => {

    useEffect(() => {
        Aos.init({
            duration: 1100,
            once: true,
        });
    }, []);

    return (
        <>
            <section className='pb-4' style={{ backgroundColor: "#F5F5FE" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 col-md-7 mt-2">
                            <div className={`${Styles.about_me_one} bg-white px-4 pt-4 pb-2 overflow-auto`} data-aos="fade-right">
                                <h5 className={`${Styles.heading} sticky-top bg-white w-50 rounded`}> <span className={`${Styles.icon} me-2`}><i className="bi bi-info"></i></span>About me</h5>
                                <p className={`${Styles.my_intro}`}>
                                    I'm Sachin, a BCA graduate and aspiring MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital experiences through clean code and thoughtful design. My journey in web development started with HTML, CSS, and JavaScript, and has grown into developing full-stack applications using React.js, Node.js, Express.js, and MongoDB.
                                    As a fresher, I am continuously learning new technologies, improving my problem-solving skills, and working on real-world projects to strengthen my expertise. I believe in writing maintainable code, creating intuitive user interfaces, and staying curious about emerging technologies. My goal is to contribute to impactful projects, grow as a developer, and build solutions that make a difference.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 mt-2">
                            <div className={`${Styles.about_me} bg-white px-4 pt-4 pb-2`} data-aos="fade-left">
                                <h5 className={`${Styles.heading}`}> <span className={`${Styles.icon} me-2`}><i className="bi bi-mortarboard"></i></span>Education</h5>
                                <h6 className={`${Styles.course}`}>Bachelor of Computer Applications (BCA)</h6>
                                <p className={`${Styles.campus_name} text-muted`}>DSB Campus, Kumaun University, Nainital</p>
                                <p style={{ fontSize: "small", fontWeight: "500" }}><span style={{ color: "#522CFD" }} className='me-3'><i className="bi bi-calendar3"></i></span><span className='text-muted'>2022 - 2025</span></p>
                                <h6 className={`${Styles.course} mt-0`}>MERN Stack Certification</h6>
                                <p className={`${Styles.campus_name} text-muted`}>Digital Web Academy, Haldwani</p>
                                <p style={{ fontSize: "small", fontWeight: "500" }}><span style={{ color: "#522CFD" }} className='me-3'><i className="bi bi-calendar3"></i></span><span className='text-muted'>2025</span></p>
                                <a href="#"><button className={`${Styles.certificate_btn} btn`}>Certificate</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-lg-5 col-md-5 mt-2">
                            <div className={`${Styles.practical_experience} bg-white px-4 pt-4 pb-2 overflow-auto`}>
                                <h5 className={`${Styles.heading} sticky-top bg-white w-75 rounded`} data-aos="fade-down"> <span className={`${Styles.icon} me-2`}><i className="bi bi-briefcase"></i></span>Practical Experience</h5>
                                <div className={`${Styles.point} d-flex mt-4 mb-3`}><div style={{ color: "#522CFD" }} className='me-2 ' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Built 3+ personal and academic projects</div></div>
                                <div className={`${Styles.point} d-flex mb-3`}><div style={{ color: "#522CFD" }} className='me-2 ' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Developed responsive web applications using MERN stack</div></div>
                                <div className={`${Styles.point} d-flex mb-3`}><div style={{ color: "#522CFD" }} className='me-2 ' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Worked with REST APIs and Redux Toolkit</div></div>
                                <div className={`${Styles.point} d-flex mb-3`}><div style={{ color: "#522CFD" }} className='me-2 ' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Used Git and GitHub for version control</div></div>
                                <div className={`${Styles.point} d-flex mb-3`}><div style={{ color: "#522CFD" }} className='me-2' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Deployed applications on platform like Netlify</div></div>
                                <div className={`${Styles.point} d-flex mb-3`}><div style={{ color: "#522CFD" }} className='me-2' data-aos="fade-right"><i className="bi bi-check-circle-fill"></i></div><div data-aos="fade-left">Developed reusable React components to improve code maintainability and scalability.</div></div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 mt-2">
                            <div className={`${Styles.about_me} bg-white px-4 pt-4 pb-4`}>
                                <h5 className={`${Styles.heading}`} data-aos="fade-down"> <span className={`${Styles.icon} me-2`}><i className="bi bi-lightning-charge-fill"></i></span>What I Do</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                                        <div className={`${Styles.work_card}`} data-aos="fade-right">
                                            <div className="row">
                                                <div className="col-3 align-content-center">
                                                    <span className={`${Styles.work_icon}`}><i className="bi bi-display"></i></span>
                                                </div>
                                                <div className="col-9">
                                                    <h6>Frontend Development</h6>
                                                    <p className='text-muted mb-0'>Building responsive and interactive user interfaces with modern technologies.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                                        <div className={`${Styles.work_card}`} data-aos="fade-left">
                                            <div className="row">
                                                <div className="col-3 align-content-center">
                                                    <span className={`${Styles.work_icon_two}`}><i className="bi bi-hdd-stack-fill"></i></span>
                                                </div>
                                                <div className="col-9">
                                                    <h6>Backend Development</h6>
                                                    <p className='text-muted mb-0'>Creating scalable REST APIs and server-side applications with Node.js and Express.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                                        <div className={`${Styles.work_card}`} data-aos="fade-right">
                                            <div className="row">
                                                <div className="col-3 align-content-center">
                                                    <span className={`${Styles.work_icon_three}`}><i className="bi bi-stack"></i></span>
                                                </div>
                                                <div className="col-9">
                                                    <h6>Full Stack Development</h6>
                                                    <p className='text-muted mb-0'>Building complete web applications using MERN stack end-to-end.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-3">
                                        <div className={`${Styles.work_card}`} data-aos="fade-left">
                                            <div className="row">
                                                <div className="col-3 align-content-center">
                                                    <span className={`${Styles.work_icon_four}`}><i className="bi bi-cloud-arrow-up"></i></span>
                                                </div>
                                                <div className="col-9">
                                                    <h6>API Integration</h6>
                                                    <p className='text-muted mb-0'>Integrating third-party APIs and building powerful features in the web applications.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.technologies} mt-4 px-4 pt-4`}>
                        <h5 className={`${Styles.heading}`} data-aos="fade-down"> <span className={`${Styles.icon} me-2`}><i className="bi bi-stack"></i></span>Technologies & Tools</h5>
                        <div className="d-inline-block pt-4 pb-3 ps-4">
                            <img src={react} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={node} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={express} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={mongodb} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={html} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={js} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={css} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={bootstrap} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={git} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={vscode} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                            <img src={postman} alt="image" className={`${Styles.techicon}`} data-aos="zoom-in" />
                        </div>
                    </div>
                    <div className={`mt-4 px-4 pt-4 ${Styles.technologies}`}>
                        <h5 className={`${Styles.heading}`} data-aos="fade-down" > <span className={`${Styles.icon} me-2`}><i className="bi bi-person"></i></span>Personal Interests</h5>
                        <div className="row mt-3 pb-3">
                            <div className="col-lg-5 col-md-5 col-12">
                                <p className={`${Styles.softskill} text-muted`} data-aos="zoom-in">Beyond coding, I enjoy playing cricket, exploring new technologies, listening to music and continuously improving my development skills.</p>
                            </div>
                            <div className={`col-lg-7 col-md-7 col-12 ${Styles.skills}`}>
                                <span className={`${Styles.softskill_name}`} data-aos="zoom-in"><span style={{ color: "#1F9330" }}><i className="bi bi-trophy-fill me-2"></i></span>Cricket</span>
                                <span className={`${Styles.softskill_name}`} data-aos="zoom-in"><span style={{ color: "#1A84F5" }}><i className="bi bi-music-note-beamed me-2"></i></span>Music</span>
                                <span className={`${Styles.softskill_name}`} data-aos="zoom-in"><span style={{ color: "#713FFB" }}><i className="bi bi-rocket-takeoff-fill me-2"></i></span>Exploring Tech</span>
                                <span className={`${Styles.softskill_name}`} data-aos="zoom-in"><span style={{ color: "#E9C42F" }}><i className="bi bi-book me-2 "></i></span>Continuous Learning</span>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-4 px-4 pt-4 ${Styles.connect_card}`} data-aos="zoom-in">
                        <div className="row mt-3 pb-3">
                            <div className="col-lg-1 col-md-1 col-12 text-center align-content-center mb-2 d-flex" >
                                <span className={`${Styles.icon_contact} me-2`}><i className="bi bi-envelope"></i></span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 mb-2">
                                <p className={`${Styles.outro} mb-0`} >Let's build something amazing together!</p>
                                <p className={`${Styles.status} mb-0 text-muted`}>I'm currently open to internships and full-time opportunities.</p>
                            </div>
                            <div className={`col-lg-4 col-md-4 col-12 text-center align-content-center`}>
                                <button className={`${Styles.connect_btn} btn`}>Let's Connect <span className={`${Styles.logo}`}><i className="bi bi-arrow-up-right ms-2"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail;