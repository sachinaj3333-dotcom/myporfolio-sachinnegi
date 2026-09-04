import React, { useEffect } from 'react'
import Styles from "../../Styles/About/Aboutherosection.module.css";
import { Link } from 'react-router';
import me from '../../assets/homepage/me.png';
import js from "../../assets/homepage/js.png";
import react from "../../assets/homepage/react.png";
import GlareHover from '../../Reactbit/glare/GlareHover';
import Aos from 'aos';

const Aboutherosection = () => {

    useEffect(() => {
        Aos.init({
            duration: 1100,
            once: true,
        });
    }, []);


    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={`${Styles.greeting}`} data-aos="flip-down">👋 Hello, I'm</div>
                            <h1 className={`${Styles.name} mt-2`} data-aos="fade-right">Sachin</h1>
                            <p className={`${Styles.intro}`} data-aos="fade-left">Aspiring Full Stack Developer</p>
                            <p className={`text-muted ${Styles.description}`} data-aos="fade-right">A passionate fresher who loves building clean, user-friendly <br /> and impactful digital experiences. I enjoy turning ideas into <br /> real-world web applications.</p>
                            <div className={`${Styles.infocard} w-75`} data-aos="zoom-in">
                                <div className="row">
                                    <div className={`col-4 ${Styles.infocard_content}`}>
                                        <span className={`${Styles.graduation} d-flex align-items-center`}><i className="bi bi-mortarboard me-3 fs-6" style={{ color: "#4B3EFC", WebkitTextStrokeWidth: "0.5px" }}></i>BCA Graduate</span>
                                    </div>
                                    <div className={`col-3 ${Styles.infocard_content}`}>
                                        <span className={`${Styles.graduation} d-flex align-items-center`}><i className="bi bi-geo-alt me-3 fs-6" style={{ color: "#4B3EFC", WebkitTextStrokeWidth: "0.5px" }}></i>India</span>
                                    </div>
                                    <div className={`col-5`}>
                                        <span className={`${Styles.graduation} d-flex align-items-center`}><i className="bi bi-calendar3 me-3 fs-6" style={{ color: "#4B3EFC", WebkitTextStrokeWidth: "0.5px" }}></i>Open to Opportunities</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4  mb-3 d-flex align-items-center'><span className={`${Styles.find_me}`}>Find me on</span><Link to={"#"} data-aos="zoom-in" className={` text-black  ms-4`}><span className={`${Styles.social_icons}`}><i className="bi bi-linkedin"></i></span></Link><Link to={"#"} data-aos="zoom-in" className='text-black ms-3' ><span className={`${Styles.social_icons}`}><i className="bi bi-github"></i></span></Link><Link to={"#"} data-aos="zoom-in" className='text-black ms-3' ><span className={`${Styles.social_icons}`}><i className="bi bi-threads"></i></span></Link><Link to={"#"} data-aos="zoom-in" className='ms-3 text-black' ><span className={`${Styles.social_icons}`} ><i className="bi bi-envelope-at-fill"></i></span></Link> </div>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-12 ${Styles.image_col}`}>
                            <div className={`${Styles.image_card} text-center`} data-aos="fade-left">
                                <img src={me} alt="Image" className={`${Styles.myimage}`} />
                                <img src={js} alt="image" className={`${Styles.jsimage}`} />
                                <img src={react} alt="image" className={`${Styles.reactimage}`} />
                            </div>
                            <div className={`${Styles.my_intro}`} data-aos="zoom-in-up">
                                <div className="row">
                                    <div className="col-2 align-items-center d-flex">
                                        <i className="bi bi-person" style={{ WebkitTextStrokeWidth: "0.5px", fontSize: "larger", color: "#522CFD" }}></i>
                                    </div>
                                    <div className="col-10">
                                        <p className={`mb-0 ${Styles.nametwo}`}>Sachin</p>
                                        <p className={`mb-0 ${Styles.profession}`}>MERN Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "#F5F5FE", }} className='mt-0 pb-5'>


                <div className={`container ${Styles.info_card}`} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} data-aos="flip-up">

                    <div className="row p-3">
                        <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "2px solid rgba(128, 128, 128, 0.151)" }}>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                    <span className={`${Styles.project_icon}`}><i className="bi bi-rocket-takeoff"></i></span>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                    <p className={`mb-0 ${Styles.info_count}`}>5+</p>
                                    <p className={`${Styles.info_detail} text-muted`}>Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "2px solid rgba(128, 128, 128, 0.151)" }}>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                    <span className={`${Styles.project_icon}`}><i className="bi bi-code-slash"></i></span>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                    <p className={`mb-0 ${Styles.info_count}`}>1+</p>
                                    <p className={`${Styles.info_detail} text-muted`}>Years Learning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12" style={{ borderRight: "2px solid rgba(128, 128, 128, 0.151)" }}>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                    <span className={`${Styles.project_icon}`}><i className="bi bi-cup-hot"></i></span>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                    <p className={`mb-0 ${Styles.info_count}`}>Daily</p>
                                    <p className={`${Styles.info_detail} text-muted`}>Learning new things</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-2 col-2 mb-3  text-center align-content-center">
                                    <span className={`${Styles.project_icon}`}><i className="bi bi-bullseye"></i></span>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-10 col-10 mb-3">
                                    <p className={`mb-0 ${Styles.info_count}`}>100%</p>
                                    <p className={`${Styles.info_detail} text-muted`}>Dedication</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutherosection;