import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { usePatient } from '../hooks/usePatient';
import { getSpecialists } from '../api/spApi';
import { hendelDateTime, hendelchange } from '../helpers/appHelper';
import { getAppointmentbyId, handelSubmit } from '../api/appApi';
import { useUserConext } from '../hooks/useUserContext';
function Index(props) {
    const { patientData, setPatientData } = usePatient()
    const [specialist, setSpecialist] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const {user} = useUserConext();

    useEffect(() => {
        getSpecialists().then((res) => setSpecialist(res))
    }, [])
    useEffect(() => {
        if (props.id) {
            getAppointmentbyId(props.id).then((res) => {
                setPatientData((prev) => ({ ...prev, name: res.data[0].name, age: res.data[0].age, address: res.data[0].address , email: res.data[0].email ,phone: res.data[0].phone}))
            })
        }
    }, [props.id])

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
                                    <input type="text"
                                        id="form6Example1"
                                        className="form-control"
                                        value={patientData.name}
                                        placeholder='Enter Your name  .... (require)'
                                        onChange={(e) => setPatientData((perv) => ({ ...perv, name: e.target.value }))}
                                    />

                                </div>
                            </div>

                        </div>

                        <div className="form-outline mb-4">
                            <div className="input-group age" id="datepicker">
                                <input type="number" name="age"
                                    placeholder='Enter your age ... (optional)'
                                    className="form-control"
                                    id="age"
                                    value={patientData.age}
                                    onChange={(e) => setPatientData((perv) => ({ ...perv, age: e.target.value }))}
                                />

                            </div>

                        </div>

                        {/* Text input */}
                        <div className="form-outline mb-4">
                            <input type="text"
                                id="form6Example4"
                                className="form-control"
                                value={patientData.address}
                                onChange={(e) => setPatientData((perv) => ({ ...perv, address: e.target.value }))}
                                placeholder='Enter your address ...(optional)'

                            />

                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <input type="email"
                                id="form6Example5"
                                className="form-control"
                                value={patientData.email}
                                onChange={(e) => setPatientData((perv) => ({ ...perv, email: e.target.value }))}
                                placeholder='Enter Your email ...(optional)'
                            />

                        </div>
                        {/* Number input */}
                        <div className="form-outline mb-4">
                            <input type="number"
                                id="form6Example6"
                                className="form-control"
                                value={patientData.phone}
                                onChange={(e) => setPatientData((perv) => ({ ...perv, phone: e.target.value }))}
                                placeholder='Enter your Phone number ....(require)'
                            />

                        </div>


                        <div className="form-outline mb-4">
                            <select className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => hendelchange(e, setPatientData, setDoctors)}
                                id="juvfd">
                                <option >Tropic </option>
                                {specialist.map((sp, ind) =>
                                (
                                    <option key={ind} value={sp._id}>{sp.category}</option>
                                ))}

                            </select>
                        </div>

                        <div className="form-outline mb-4">
                            <select className="form-select"
                                aria-label="Default select example"
                                value={patientData.doctor}
                                onChange={(e) => setPatientData((prev) => ({ ...prev, doctor: e.target.value }))}
                                id="doctor">
                                <option value=""> Preferred Doctor  .. </option>
                                {doctors.map((doctor, ind) => (
                                    <option key={ind} value={doctor._id}>{doctor.name}</option>
                                ))}

                            </select>

                        </div>
                        <div className="form-outline mb-4">
                            <DatePicker
                                selected={patientData.app_Time}
                                onChange={(date) => hendelDateTime(date, setPatientData)}
                                showTimeSelect
                                className="form-control"
                                timeFormat="HH:mm"
                                dateFormat="dd/MM/yyyy h:mm aa"
                                placeholderText="Date and Time ..........."
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handelSubmit(props.onHide, patientData, props.req, props.id, props.setAppointments,user)} > Submit</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Index;