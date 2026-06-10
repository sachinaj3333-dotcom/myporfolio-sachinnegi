import React from 'react'
import Styles from "../../Styles/Homepage/Infosection.module.css";

const Infosection = () => {
    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div style={{ backgroundColor: "#FAFAFE" }} className={`p-4 ${Styles.info_card}`}>
                                <p className={`${Styles.heading} text-center`}>What I Do</p>
                                <div className="row">
                                    <div className="col-3">
                                        
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.web_dev_icon}`}><i className="bi bi-code-slash"></i></span>
                                            </p>
                                            <p className={`${Styles.web_dev_heading} mb-0`}>Web Development</p>
                                            <p className={`${Styles.web_dev_description}`}>Building responsive and dynamic websites.</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.back_dev_icon}`}><i className="bi bi-database"></i></span>
                                            </p>
                                            <p className={`${Styles.back_dev_heading} mb-0`}>Backend Development</p>
                                            <p className={`${Styles.back_dev_description}`}>Creating secure APIs and robust server solutions.</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.puzzle_icon}`}><i className="bi bi-puzzle-fill"></i></span>
                                            </p>
                                            <p className={`${Styles.puzzle_heading} mb-0`}>Problem Solving</p>
                                            <p className={`${Styles.puzzle_description}`}>Solving real-world problems with efficient solutions.</p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.continuous_icon}`}><i className="bi bi-rocket-takeoff-fill"></i></span>
                                            </p>
                                            <p className={`${Styles.continuous_heading} mb-0`}>Continuous Learning</p>
                                            <p className={`${Styles.continuous_description}`}>Always learning new tech and improving skills.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Infosection;