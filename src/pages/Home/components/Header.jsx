import React from "react";
import Logo from '../../../assets/frontend/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faClock , faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <>
           
          {/* Header Section Start */}
                    <div className="header_top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-3">
                                    <div className="our_link">
                                        <a href="#">
                                            <img src={Logo} alt="No image" className="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9">
                                    <div className="right_info">
                                        <div className="content">
                                            <div className="icon">
                                                
                                                <FontAwesomeIcon icon= {faPhone} />
                                            </div>
                                            <div className="details">
                                                <strong>Phone Number</strong>
                                                <p>0000000000</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faClock} />                
                                            </div>
                                            <div className="details">
                                                <strong>Working Hours:</strong>
                                                <p>7.00AM TO 10.00PM</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="details">
                                                <strong>Email Address:</strong>
                                                <p>sandhani-helpline@sondhani.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

    
            </>
            );
}