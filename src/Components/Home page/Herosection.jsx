import React, { useEffect } from 'react'
import Styles from "../../Styles/Homepage/Herosection.module.css";
import { Link } from 'react-router';
import heroimage from "../../assets/herosectionimage.png";
import GlareHover from "../../Reactbit/glare/GlareHover.jsx";
import sign from "../../assets/sachinsign.png";
import Aos from 'aos';

const HeroSection = () => {

    useEffect(() => {
            Aos.init({
                duration: 1100,
                once: true,
            });
        }, []);


    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }} id='herosection'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <p className={`${Styles.hero_intro} mb-0`}>Hi, i'm <img src={sign} alt="signature" data-aos="flip-left" height={40} className='ms-2' /></p>
                            <p className={`${Styles.hero_intro_second} mb-0`} data-aos="fade-right">IT Professional</p>
                            <p className={`${Styles.hero_intro_third} mb-0`} data-aos="fade-left">Who Builds</p>
                            <p className={`${Styles.hero_intro_fourth}`} data-aos="fade-right"><span className={`${Styles.designed_intro}`}>Digital </span>Solutions<span style={{ color: '#8025F1' }}>.</span></p>
                            <p className={`${Styles.intro_description} mb-4`} data-aos="fade-left">Passionate about building modern, responsive and <br /> user-friendly web applications.</p>
                            <Link to={"#"} ><button data-aos="fade-right" className={`${Styles.view_project_btn} me-3`}>View My Work <i className={`bi bi-arrow-right ms-1 ${Styles.arrow_icon}`}></i></button></Link>
                            <Link to={"#"}><button data-aos="fade-left" className={`${Styles.download_cv_btn} mt-2`}>Download CV <i className="bi bi-download ms-1"></i></button></Link>
                            <div className='mt-4  mb-2 d-flex align-items-center'><span className={`${Styles.find_me}`}>Find me on</span><Link to={"#"} data-aos="flip-left" className={`text-black  ms-4`}><span className={`${Styles.social_icons}`}><i className="bi bi-linkedin"></i></span></Link><Link to={"#"} data-aos="flip-left" className='text-black ms-3' ><span className={`${Styles.social_icons} `}><i className="bi bi-github"></i></span></Link><Link to={"#"} data-aos="flip-left" className='text-black ms-3' ><span className={`${Styles.social_icons}`}><i className="bi bi-threads"></i></span></Link><Link data-aos="flip-left" to={"#"} className='ms-3 text-black' ><span className={`${Styles.social_icons}`}><i className="bi bi-envelope-at-fill"></i></span></Link> </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 overflow-hidden p-0" style={{ height: "70vh" }}>
                            <img src={heroimage} alt="image" className={`${Styles.heroimage}`} />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "#F5F5FE", }} className='mt-0 pb-5'>

                {/* <div style={{height: "600px", position: "relative"}}> */}

                <div className={`container ${Styles.info_card}`} data-aos="flip-up" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 20px 25px -5px, rgba(0, 0, 0, 0.55) 0px 10px 10px -5px" }}>

                    <GlareHover
                        glareColor='#ffffff'
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >

                        <div className="row p-3">
                            <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-code-square"></i></span>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                        <p className={`mb-0 ${Styles.info_count}`}>5+</p>
                                        <p className={`${Styles.info_detail}`}>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-stack"></i></span>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                        <p className={`mb-0 ${Styles.info_count}`}>14+</p>
                                        <p className={`${Styles.info_detail}`}>Technologies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "1px solid #3923e24e" }}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-lightbulb"></i></span>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                        <p className={`mb-0 ${Styles.info_count}`}>1+</p>
                                        <p className={`${Styles.info_detail}`}>Year Learning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                        <span className={`${Styles.project_icon}`}><i className="bi bi-rocket-takeoff"></i></span>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
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