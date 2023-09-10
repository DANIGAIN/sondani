import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Index(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Online Appointment From
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="form-outline">
                                    <input type="text" id="form6Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form6Example1">
                                        Full name
                                    </label>
                                </div>
                            </div>

                        </div>
                        {/* Text input */}
                        <div className="form-outline mb-4">
                            <div className="input-group date" id="datepicker">
                                <input type="date" name="date" className="form-control" id="date" />
                                <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block">
                                        <i className="fa fa-calendar" />
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </span>
                                </span>
                            </div>
                            <label htmlFor="date" className="col-form-label">
                                Date of birth
                            </label>
                        </div>

                        {/* Text input */}
                        <div className="form-outline mb-4">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" htmlFor="form6Example4">
                                Address
                            </label>
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <input type="email" id="form6Example5" className="form-control" />
                            <label className="form-label" htmlFor="form6Example5">
                                Email
                            </label>
                        </div>
                        {/* Number input */}
                        <div className="form-outline mb-4">
                            <input type="number" id="form6Example6" className="form-control" />
                            <label className="form-label" htmlFor="form6Example6">
                                Phone
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <select class="form-select" aria-label="Default select example" id="juvfd">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label className="form-label" htmlFor="juvfd">
                                Preferred Doctor 
                            </label>
                        </div>
                    
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button > Submit</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Index;