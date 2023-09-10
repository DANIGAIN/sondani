import { faBriefcaseMedical, faSyringe, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react' ;


export default function Services() {
    return (
        <section>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service_iconbox">
                                <div className="service_iconbox_icon">
                                    <FontAwesomeIcon icon={faUserDoctor}/>
                                </div>
                                <div className="service_iconbox_content">
                                    <p>Find a doctor</p>
                                    <h5>
                                        <a href="#">Need any information of a doctor then click here</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service_iconbox">
                                <div className="service_iconbox_icon">
                                    <FontAwesomeIcon icon={faBriefcaseMedical}/>
                                </div>
                                <div className="service_iconbox_content">
                                    <p>Collect sample booking</p>
                                    <h5>
                                        <a href="#">
                                            About sample booking and another information to know then
                                            click here
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service_iconbox">
                                <div className="service_iconbox_icon">
                                    <FontAwesomeIcon icon={faSyringe}/>
                                </div>
                                <div className="service_iconbox_content">
                                    <p>blood bank</p>
                                    <h5>
                                        <a href="#">Emergency Blood then click here</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}