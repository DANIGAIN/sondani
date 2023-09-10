import { faDribbble,  faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Footer() {
    return (
        <>

            <footer
                className="text-white text-center text-lg-start"
                style={{ backgroundColor: "#3091F2" }}
            >

                <div className="container p-4">

                    <div className="row mt-4">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">contact us</h5>
                            <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                                <li className="mb-3">
                                    <span className="fa-li">
                                        <FontAwesomeIcon icon={faHome} />
                                    </span>
                                    <span className="ms-2">New York, NY 10012, US</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li">

                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <span className="ms-2">shondhani@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <span className="ms-2">+ 01 234 567 88</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li">

                                        <FontAwesomeIcon icon={faPrint} />
                                    </span>
                                    <span className="ms-2">+ 01 234 567 89</span>
                                </li>
                            </ul>
                            <div className="mt-4">

                                <a type="button" className="btn btn-floating btn-warning ">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>

                                <a type="button" className="btn btn-floating btn-warning ">
                                    <FontAwesomeIcon icon={faDribbble} />
                                </a>

                                <a type="button" className="btn btn-floating btn-warning ">

                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>

                                <a type="button" className="btn btn-floating btn-warning ">

                                    <FontAwesomeIcon icon={faGooglePlusG} />

                                </a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Quick Links</h5>

                            <div className="col-md-4 col-sm-12">
                                <ul className="quick_link">
                            
                                    <li>
                                        <a href="file:///E:/unicorn/school_eims/history.html">Booking on pathology</a>
                                    </li>
                                    <li>
                                        <a href="file:///E:/unicorn/school_eims/routine.html">book a cabin</a>
                                    </li>
                                    <li>
                                        <a href="file:///E:/unicorn/school_eims/student.html.">find a doctor</a>
                                    </li>
                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>
                            <table className="table text-center text-white">
                                <tbody className="font-weight-normal">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>9am - 10pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    Copyright © 2023 Institute. All rights reserved. Powered by
                    <a className="text-white" href="https://mdbootstrap.com/">
                        Unicorn
                    </a>
                </div>

            </footer>


        </>
    )
}