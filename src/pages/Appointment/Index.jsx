import React, { useState, useEffect } from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import { useUserConext } from '../../hooks/useUserContext'
import { Status, StatusColor } from '../../assets/Constant'
import { convertUtcToBst } from '../../helpers/appHelper'
import { getAppointment, handelDelete } from '../../api/appApi'
import { useAppContext } from '../../hooks/useAppContext'
import Appointment from '../../components/AddAppointment'
import { useNavigate } from 'react-router-dom'

function Index() {
    const { user } = useUserConext();
    const { appointments, setAppointments } = useAppContext();
    const [ id, setId ] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        getAppointment(user.id).then((res) => {
            setAppointments(res.data);
        })
    }, [])

    useEffect(()=>{!appointments.length ?navigate(-1):''},[])

    return (
        <div>
            <Header />
            <Navigation />
            <Appointment
                show={modalShow}
                onHide={() => setModalShow(false)}
                req='edit'
                setAppointments={setAppointments}
                id={id}
            />
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    className="table table-centered w-100 dt-responsive nowrap"
                                    id="products-datatable"
                                >
                                    <thead className="table-light">
                                        <tr>
                                            <th className="all">Name</th>
                                            <th> Doctor name</th>
                                            <th> Specialist </th>
                                            <th> Status </th>
                                            <th> Time </th>
                                            <th style={{ width: 85 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments.map((appointment, ind) =>
                                        (
                                            <tr key={ind}>

                                                <td>{appointment.name}</td>


                                                <td>{appointment.doctor.name}</td>
                                                <td>{appointment.specialist.category}</td>
                                                <td>

                                                    <span className={`badge text-white ${StatusColor[appointment.status]}`}>{Status[appointment.status]}</span>
                                                </td>
                                                <td>{convertUtcToBst(appointment.app_Time)}</td>
                                                {(appointment.status == 0) ? (
                                                    <td className="table-action">
                                                        <a className="action-icon">
                                                            <i onClick={() => {
                                                                setId(appointment._id);
                                                                setModalShow(true);
                                                            }} className="mdi mdi-square-edit-outline" />
                                                        </a>

                                                        <a className="action-icon">
                                                            <i onClick={() => handelDelete(appointment._id, appointments, setAppointments)} className="mdi mdi-delete" />
                                                        </a>
                                                    </td>
                                                ) : ''}


                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                            </div>
                        </div>{" "}

                    </div>{" "}

                </div>{" "}

            </div>

            <Footer />

        </div>
    )
}

export default Index