import React from 'react'
import Styles from "../../Styles/Homepage/Infosection.module.css";
import { Link } from 'react-router';
import snapbug from "../../assets/homepage/projectone.png";
import foodstation from "../../assets/homepage/projecttwo.png";
import pixelcart from "../../assets/homepage/projectthree.png";
import me from "../../assets/homepage/me.png";

const Infosection = () => {
    return (
        <>
            <section style={{ backgroundColor: "#F5F5FE" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-12 mb-3">
                            <div style={{ backgroundColor: "#FAFAFE" }} className={`p-4 ${Styles.info_card}`}>
                                <p className={`${Styles.heading} text-center`}>What I Do</p>
                                <div className="row">
                                    <div className="col-lg-3 col-6 mb-2">

                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.web_dev_icon}`}><i className="bi bi-code-slash"></i></span>
                                            </p>
                                            <p className={`${Styles.web_dev_heading} mb-0`}>Web Development</p>
                                            <p className={`${Styles.web_dev_description}`}>Building responsive and dynamic websites.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.back_dev_icon}`}><i className="bi bi-database"></i></span>
                                            </p>
                                            <p className={`${Styles.back_dev_heading} mb-0`}>Backend Development</p>
                                            <p className={`${Styles.back_dev_description}`}>Creating secure APIs and robust server solutions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.puzzle_icon}`}><i className="bi bi-puzzle-fill"></i></span>
                                            </p>
                                            <p className={`${Styles.puzzle_heading} mb-0`}>Problem Solving</p>
                                            <p className={`${Styles.puzzle_description}`}>Solving real-world problems with efficient solutions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className={`${Styles.visit_card}`}>
                                            <p>
                                                <span className={`${Styles.continuous_icon}`}><i className="bi bi-rocket-takeoff-fill"></i></span>
                                            </p>
                                            <p className={`${Styles.continuous_heading} mb-0`}>Continuous Learning</p>
                                            <p className={`${Styles.continuous_description}`}>Always learning new tech and improving skills.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 d-flex justify-content-between'>
                                    <span className={`${Styles.myprojects}`}><span className={`${Styles.myprojecticon}`}><i className="bi bi-code-slash"></i></span> My Projects</span>
                                    <Link to={"#"} className={`${Styles.allprojectlink}`}><span>View All Projects <i className={`bi bi-arrow-right ms-1 `}></i></span></Link>
                                </div>
                                <div className="row mt-4 d-flex justify-content-center">
                                    <div className="col-lg-4 col-12 col-md-8 col-sm-10 mb-2">
                                        <div className={`card ${Styles.projectcard} `}>
                                            <img src={snapbug} alt="image" width={"100%"} style={{ borderRadius: "10px" }} height={150} />
                                            <Link to={"#"}>
                                                <span className={`${Styles.linkicon}`}><i className="bi bi-box-arrow-up-right"></i></span>
                                            </Link>
                                            <div className="card-body">
                                                <p className={`${Styles.projectname} mb-1`}>SnapBug</p>
                                                <p className={`${Styles.projectdescription} text-muted`}>Productivity app manage projects and team collaboration.</p>
                                                <p><span className={`${Styles.tags} me-2`}>React</span><span className={`${Styles.tags} me-2`}>Bootstrap</span><span className={`${Styles.tags}`}>Node.js</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 col-md-8 col-sm-10 mb-2">
                                        <div className={`card ${Styles.projectcard} `}>
                                            <img src={foodstation} alt="image" width={"100%"} style={{ borderRadius: "10px" }} height={150} />
                                            <Link to={"#"}>
                                                <span className={`${Styles.linkicon}`}><i className="bi bi-box-arrow-up-right"></i></span>
                                            </Link>
                                            <div className="card-body">
                                                <p className={`${Styles.projectname} mb-1`}>FoodStation</p>
                                                <p className={`${Styles.projectdescription} text-muted`}>Food recipe app for discovering recipes and cooking guides.</p>
                                                <p><span className={`${Styles.tags} me-2`}>React</span><span className={`${Styles.tags} me-2`}>Bootstrap</span><span className={`${Styles.tags}`}>Redux Toolkit</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 col-md-8 col-sm-10">
                                        <div className={`card ${Styles.projectcard} `}>
                                            <img src={pixelcart} alt="image" width={"100%"} style={{ borderRadius: "10px" }} height={150} />
                                            <Link to={"#"}>
                                                <span className={`${Styles.linkicon}`}><i className="bi bi-box-arrow-up-right"></i></span>
                                            </Link>
                                            <div className="card-body">
                                                <p className={`${Styles.projectname} mb-1`}>PixelCart</p>
                                                <p className={`${Styles.projectdescription} text-muted`}>Online fashion store clone built with React and Redux Toolkit.</p>
                                                <p><span className={`${Styles.tags} me-2`}>React</span><span className={`${Styles.tags} me-2`}>React-redux</span><span className={`${Styles.tags}`}>Bootstrap</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className={`card ${Styles.aboutmecard} px-5 pt-5 pb-5`}>
                                <p className={`${Styles.aboutme}`}><span className={`${Styles.icon} me-3`}><i className="bi bi-person"></i></span>About Me</p>
                                <div className='text-center mt-2 mb-2'>
                                    <img src={me} alt="image" className={`${Styles.myimage}`} />
                                </div>
                                <p className={`${Styles.currentinfo} mt-4`}>BCA (Fresher)</p>
                                <p className={`${Styles.intro} text-muted mb-4`}>I'm an enthusiastic learner with a passion for coding and creating meaningful digital experiences.</p>
                                <p className={`${Styles.introdescription} mb-4`}><span className={`${Styles.introicon} me-2`}><i className="bi bi-geo-alt"></i></span>India</p>
                                <p className={`${Styles.introdescription} mb-4`}><span className={`${Styles.introicon} me-2`}><i className="bi bi-envelope"></i></span>sachinaj3333@gmail.com</p>
                                <p className={`${Styles.introdescription} mb-4`}><span className={`${Styles.introicon} me-2`}><i className="bi bi-telephone"></i></span>+91 9012016124</p>
                                <button className={`${Styles.connectbtn} btn mt-3`}>Let's Connect <span><i className="bi bi-arrow-right"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Infosection;