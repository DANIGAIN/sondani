import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import AddSpecialist from '../../components/AddSpecialist';
import { handelDelete ,getSpecialists } from '../../api/spApi';



function SpecialistList() {

    const [specialists, setSpecialists] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        getSpecialists().then((res)=> setSpecialists(res));
    }, [modalShow])
    return (

        <div>
            <AddSpecialist
            show={modalShow}
            onHide={()=>setModalShow(false)}
            />

            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-sm-4">
                                        <a onClick={() => setModalShow(true)} className="btn btn-danger mb-2">
                                            <i className="mdi mdi-plus-circle me-2" /> Add
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


                                                <th>Type</th>
                                                <th style={{ width: 85 }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {specialists.map((specialist, ind) =>
                                            (
                                                <tr key={ind}>

                                                    <td>{specialist.category}</td>

                                                    <td className="table-action">
                                                    
                                                        <a className="action-icon">
                                                            <i onClick={() => handelDelete(specialist._id ,specialists ,setSpecialists)} className="mdi mdi-delete" />
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

        </div>
    )
}

export default SpecialistList