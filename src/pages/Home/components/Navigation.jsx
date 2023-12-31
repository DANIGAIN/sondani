import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import Appointment from  "../../../components/Appointment";

export default function Navigation() {

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() =>{ 
        window.addEventListener("scroll",function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky",scrollY>100);
         });

    } ,[])

    return (
        <>
        <Appointment 
              show={modalShow}
              onHide={() => setModalShow(false)}
        />
            <header>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-7">
                            <nav
                                className="navbar navbar-expand-lg navbar-light"
                                id="main_navbar"
                            >
                                <div className="container-fluid">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link
                                             
                                                    className={`nav-link`}
                                                    aria-current="page"
                                                    to="/"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className={`nav-link `}
                                                    to="/services">
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className={`nav-link `}
                                                    to="/doctor"
                                                >
                                                    Doctors
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className={`nav-link `}
                                                    to="/about"
                                                    aria-current="page"


                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className={`nav-link `}
                                                    to="/contact"
                                                 >
                                                    Contact
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <form
                                role="search"
                                id="search_form"
                                className="d-flex w-100 serach"
                                action="#"
                                method="post"
                            // onsubmit="return false;"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="XgDmsFaEr9FBuEtl7cMbhWKlNFjmjqGh5UQ0f64h"
                                />
                                <div className="simple-search input-group w-100">
                                    <input
                                        className="form-control border-0"
                                        id="headerSearch"
                                        name="search_text"
                                        type="search"
                                        defaultValue=""
                                        placeholder="Search..."
                                    // onkeyup="searching()"
                                    />
                                    <ul
                                        className="list-group"
                                        id="search_result"
                                        style={{
                                            margin: "37px 0px 15px 15px",
                                            padding: 0,
                                            border: "none",
                                            position: "absolute",
                                            width: 250,
                                            height: 400,
                                            overflowY: "auto",
                                            overflowX: "hidden",
                                            display: "none"
                                        }}
                                    ></ul>
                                    <span className="input-group-append bg-light border-0">
                                        <button className="btn"
                                            type="button"
                                        //  onclick="searching()"
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-2 col-sm-6">        
                            <button
                                type="button"
                                className="btn btn_appointment"
                                variant="primary"
                                onClick={() => setModalShow(true)}  
                            >
                               Make an appointment
                            </button>
                        </div>
                        <div className="col-lg-1">
                            <a href="#" className="header_social_link">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}
