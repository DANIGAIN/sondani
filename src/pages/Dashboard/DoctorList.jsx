import React from 'react'
import AddDoctor from '../../components/addDoctor';
import { handelDeleteDoctor } from '../../api/doctorApi';

function DoctorList(props) {

    const { doctors, setDoctors ,modalShow ,setModalShow} = props;

    return (

        <div>
            <AddDoctor
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <a onClick={()=>setModalShow(true)} className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-2" /> Add Doctor
                                    </a>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-sm-end">
                                        <button type="button" className="btn btn-success mb-2 me-1">
                                            <i className="mdi mdi-cog-outline" />
                                        </button>
                                        <button type="button" className="btn btn-light mb-2 me-1">
                                            Import
                                        </button>
                                        <button type="button" className="btn btn-light mb-2">
                                            Export
                                        </button>
                                    </div>
                                </div>
                                {/* end col*/}
                            </div>
                            <div className="table-responsive">
                                <table
                                    className="table table-centered w-100 dt-responsive nowrap"
                                    id="products-datatable"
                                >
                                    <thead className="table-light">
                                        <tr>
                                            <th className="all" >
                                                Image
                                            </th>
                                            <th className="all">Name</th>
                                            <th>Specialist</th>
                                            <th>Rating</th>
                                            <th style={{ width: 85 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {doctors.map((doctor, ind) =>
                                        (
                                    
                                            <tr key={ind}>
                                                <td style={{ width: 50, height: 70 }}>
                                                    <img
                                                        src={doctor.image}
                                                        className="rounded-circle custom-image"
                                                    />
                                                </td>

                                                <td>{doctor.name}</td>


                                                <td>{doctor.specialist.map((sp , ind)=>
                                                (
                                                     <span className="d-sm-inline-block m-1"key={ind} >{sp.category}</span>
                                                ))}
                                                </td>
                                                <td>
                                                    <span >{doctor.rating}</span>
                                                </td>
                                                <td className="table-action">
                                                    <a className="action-icon">
                                                        <i onClick={() => handelUpdate(doctor.id)} className="mdi mdi-square-edit-outline" />
                                                    </a>

                                                    <a className="action-icon">
                                                        <i onClick={() => handelDeleteDoctor(doctor.id ,doctors ,setDoctors)} className="mdi mdi-delete" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
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

export default DoctorList