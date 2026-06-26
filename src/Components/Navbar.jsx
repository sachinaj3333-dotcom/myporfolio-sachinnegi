import React from 'react'
import { Link } from 'react-router';
import Styles from "../Styles/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top top-0" style={{backgroundColor: "#F9F9FE", borderBottom: "1px solid #e2e6f7", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}}>
                <div className="container-fluid">
                    <Link className= {`navbar-brand ${Styles.nav_brand} ms-5`} to ={"#"}>SN<span style={{color: "#5932EE"}}>.</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${Styles.nav_ul}`}>
                            <li className={`nav-item me-5 ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} aria-current="page" to ={"#"}>Home</Link>
                            </li>
                            <li className={`nav-item me-5 ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} to ={"#"}>About</Link>
                            </li>
                            <li className={`nav-item me-5 ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} to ={"#"}>Projects</Link>
                            </li>
                            <li className={`nav-item me-5 ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} to ={"#"}>Experience</Link>
                            </li>
                            <li className={`nav-item me-5 ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} to ={"#"}>Skills</Link>
                            </li>
                            <li className={`nav-item ${Styles.nav_options}`}>
                                <Link className= {`nav-link ${Styles.nav_items}`} to ={"#"}>Contact</Link>
                            </li>
                            <Link to={"#"} className='me-5 d-md-none'><button className={`btn ${Styles.connect_btn}`}><i className="bi bi-send me-2"></i>Let's Connect</button></Link>
                        </ul>
                        
                    </div>
                    <Link to={"#"} className='me-5 d-none d-md-block'><button className={`btn ${Styles.connect_btn}`}><i className="bi bi-send me-2"></i>Let's Connect</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;