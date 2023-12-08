import React, { useEffect ,useState} from 'react'

import { getAllAppointment  } from '../../api/appApi';
import { convertUtcToBst } from '../../helpers/appHelper';
import { StatusColor, Status } from '../../assets/Constant';
import { handelStatue ,handelDelete } from '../../api/appApi';


function AppointmentList() {
   
    const [ appointments ,setAppointments] = useState([]);
    useEffect(() => {
        getAllAppointment().then((req) => setAppointments(req.data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-12">
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
                                            <th >Doctor name </th>
                                            <th>Specialist</th>
                                            <th>Statue</th>
                                            <th>Time </th>
                                            <th style={{ width: 85 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                    
                                        { appointments.map((appointment, ind) =>
                                        (

                                            <tr key={ind}>
                                                <td>{appointment.name}</td>
                                                <td>{appointment.doctor.name}</td>


                                                <td>{appointment.specialist.category}
                                                </td>

                                                <td>
                                                    <span className={`badge text-white ${StatusColor[appointment.status]}`}>{Status[appointment.status]}</span>
                                                </td>
                                                <td>
                                                    <span >{convertUtcToBst(appointment.app_Time)}</span>
                                                </td>

                                                {(!appointment.status) ?
                                                    <div className="d-flex align-items-start">
                                                        <input type="button" onClick={()=>handelStatue(2, appointment._id ,setAppointments ,appointments)} className="btn btn-primary" value="Accept" />
                                                        <input type="button" onClick={()=>handelStatue(1, appointment._id ,setAppointments ,appointments)} className="btn btn-danger ml-5" value="Reject" />
                                                    </div>
                                                    :
                                                    <td className="table-action">
                                                        <a className="action-icon">
                                                            <i className="mdi mdi-delete" onClick={()=>handelDelete(appointment._id  ,appointments, setAppointments)} />
                                                        </a>
                                                    </td>
                                                }

                                            </tr>
                                        )) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </div>

        </div>

    )
}

export default AppointmentList