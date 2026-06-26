import React, { useEffect } from 'react'
import Styles from "../../Styles/Homepage/Bottomsection.module.css";
import html from "../../assets/homepage/html.png";
import css from "../../assets/homepage/css.png";
import js from "../../assets/homepage/js.png";
import react from "../../assets/homepage/react.png";
import bootstrap from "../../assets/homepage/bootstrap.png";
import git from "../../assets/homepage/git.png";
import nodejs from "../../assets/homepage/nodejs.png";
import Aos from 'aos';

const Bottomsection = () => {

    useEffect(() => {
            Aos.init({
                duration: 1100,
                once: true,
            });
        }, []);

    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-7 col-12 mt-4">
                            <div className={`card ${Styles.skillcard} p-3`} style={{ backgroundColor: "#FAFAFE" }}>
                                <p className={`${Styles.title}`}><span className={`${Styles.titleicon} me-2`}><i className="bi bi-stars"></i></span> Skills & Technologies</p>
                                <div className='d-inline-block'>
                                    <img src={html} alt="image" data-aos="zoom-in"  className={`${Styles.skillicon} me-4 ms-4`} />
                                    <img src={css} alt="image" data-aos="zoom-in"  className={`${Styles.skillicon} me-4`} />
                                    <img src={js} alt="image" data-aos="zoom-in" className={`${Styles.skillicon} me-4`} />
                                    <img src={react} alt="image" data-aos="zoom-in" className={`${Styles.skillicon} me-4`} />
                                    <img src={bootstrap} alt="image" data-aos="zoom-in" className={`${Styles.skillicon} me-4`} />
                                    <img src={git} alt="image" data-aos="zoom-in" className={`${Styles.skillicon} me-4`} />
                                    <img src={nodejs} alt="image" data-aos="zoom-in" className={`${Styles.skillicon}`} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 mt-4">
                            <div className={`card ${Styles.skillcard} p-3 text-center d-flex justify-content-center`} style={{ backgroundColor: "#FAFAFE" }}>
                                <p className={`${Styles.quote} mb-3 mt-5`}><span className={`${Styles.quotation}`}><i className="bi bi-quote"></i></span>The best way to predict the future is to build it.</p>
                                <div className={`signature`}>
                                    <svg width="250" data-aos="flip-right" height="50" viewBox="0 0 250 60" className={`${Styles.svg}`}>
                                        <path
                                            d="M10 25 Q30 25 20 30 T90 18 T130 22 T170 18 T240 20"
                                            fill="none"
                                            stroke="#A855F7"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#FAFAFE" }} className={`${Styles.footer} mt-3 pt-2 px-3 pb-4`} data-aos="fade-up">
                        <div className="row">
                            <div className="col-1" >
                                <span className={`${Styles.namesign}`}>SN</span><span style={{ color: "#5932EE", fontWeight: "500", fontSize: "larger" }}>.</span>
                            </div>
                            <div className="col-5">
                                <span className={`${Styles.footer_rights} ms-3 text-muted`}>©2026 Sachin Singh Negi. All rights reserved. </span>
                            </div>
                            <div className="col-4">
                                <span className={`${Styles.footer_heart}`}>💜 Built with passion</span>
                            </div>
                            <div className="col-2 text-end">
                                <div className={`${Styles.arrowupparent} mt-2`} >
                                    <a href="#herosection"><span className={`${Styles.arrowup}`}><i className="bi bi-arrow-up"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bottomsection;