import React from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function
    () {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-between mb-3">
                    <span>Doctors</span>
                    <button className="btn btn-success add">Add Doctors</button>
                </div>
                <div className="row g-2">
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/LohyFIN.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Patey Cruiser</h5>
                            <small>Neurosurgeon</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/o5uMfKo.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Mario Speedway</h5>
                            <small>Cardiologist</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/tmdHXOY.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Anna Sthesia</h5>
                            <small>Surgeon</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />


                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/C4egmYM.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Paul Moliv</h5>
                            <small>Dentist</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/0LKZQYM.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Anna Maul</h5>
                            <small>Eye Specialist</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/ZSkeqnd.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Gail Forcewind</h5>
                            <small>Urology</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/MZm1LNz.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Patey Cruiser</h5>
                            <small>Neurosurgeon</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center">
                            <div className="img mb-2">
                                <img
                                    src="https://i.imgur.com/HFpxxJz.jpg"
                                    width={70}
                                    className="rounded-circle"
                                />
                            </div>
                            <h5 className="mb-0">Patey Cruiser</h5>
                            <small>Neurosurgeon</small>
                            <div className="ratings mt-2">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                            <div className="mt-4 apointment">
                                <button className="btn btn-success text-uppercase">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
