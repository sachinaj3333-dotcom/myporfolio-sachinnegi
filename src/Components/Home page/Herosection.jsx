import React from 'react'
import Styles from "../../Styles/Homepage/Herosection.module.css";
import { Link } from 'react-router';
import heroimage from "../../assets/herosectionimage.png";
import GlareHover from "../../Reactbit/glare/GlareHover.jsx";

const HeroSection = () => {
    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12">
                            <p className={`${Styles.hero_intro} mb-0`}>Hi, i'm <span className={`${Styles.name}`}>Sachin</span></p>
                            <p className={`${Styles.hero_intro_second} mb-0`}>IT Professional</p>
                            <p className={`${Styles.hero_intro_third} mb-0`}>Who Builds</p>
                            <p className={`${Styles.hero_intro_fourth}`}><span className={`${Styles.designed_intro}`}>Digital </span>Solutions<span style={{ color: '#8025F1' }}>.</span></p>
                            <p className={`${Styles.intro_description} mb-4`}>Passionate about building modern, responsive and <br /> user-friendly web applications.</p>
                            <Link to={"#"}><button className={`${Styles.view_project_btn} me-3`}>View My Work <i className={`bi bi-arrow-right ms-1 ${Styles.arrow_icon}`}></i></button></Link>
                            <Link to={"#"}><button className={`${Styles.download_cv_btn} mt-2`}>Download CV <i className="bi bi-download ms-1"></i></button></Link>
                            <p className='mt-4'><span className={`${Styles.find_me}`}>Find me on</span> <Link to={"#"} className={`text-black  ms-4`}><span className={`${Styles.social_icons}`}><i className="bi bi-linkedin"></i></span></Link><Link to={"#"} className='text-black ms-3'><span className={`${Styles.social_icons} `}><i className="bi bi-github"></i></span></Link><Link to={"#"} className='text-black ms-3'><span className={`${Styles.social_icons}`}><i className="bi bi-threads"></i></span></Link><Link to={"#"} className='ms-3 text-black'><span className={`${Styles.social_icons}`}><i className="bi bi-envelope-at-fill"></i></span></Link> </p>
                        </div>
                        <div className="col-lg-7 col-sm-12 overflow-hidden p-0" style={{ height: "70vh" }}>
                            <img src={heroimage} alt="image" className={`${Styles.heroimage}`} />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#F5F5FE", }} className='mt-0 pb-5'>

                {/* <div style={{height: "600px", position: "relative"}}> */}

                <div className={`container ${Styles.info_card}`} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 20px 25px -5px, rgba(0, 0, 0, 0.55) 0px 10px 10px -5px" }}>

                    <GlareHover
                        glareColor='#ffffff'
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >

                        <div className="row p-3">
                            <div className="col-3" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-3 text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-code-square"></i></span>
                                    </div>
                                    <div className="col-9">
                                        <p className={`mb-0 ${Styles.info_count}`}>5+</p>
                                        <p className={`${Styles.info_detail}`}>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-3 text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-stack"></i></span>
                                    </div>
                                    <div className="col-9">
                                        <p className={`mb-0 ${Styles.info_count}`}>14+</p>
                                        <p className={`${Styles.info_detail}`}>Technologies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-3 text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-lightbulb"></i></span>
                                    </div>
                                    <div className="col-9">
                                        <p className={`mb-0 ${Styles.info_count}`}>1+</p>
                                        <p className={`${Styles.info_detail}`}>Year Learning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-rocket-takeoff"></i></span>
                                    </div>
                                    <div className="col-9">
                                        <p className={`mb-0 ${Styles.info_count}`}>Always</p>
                                        <p className={`${Styles.info_detail}`}>Learning New Things</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlareHover>
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default HeroSection;