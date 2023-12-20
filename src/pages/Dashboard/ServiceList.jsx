import React, { useEffect, useState } from 'react'
import { getBlods, handelDeleteBlod } from '../../api/bladApi';

import AddBlod from '../../components/addBlod'
import { toast } from 'react-toastify';
import axios from 'axios';

function ServiceList() {
    const [modalShow, setModalShow] = useState(false);
    const [blod, setBlod] = useState({
        name: '',
        group: '',
        info: '',
        price: '',
        phone: '',
    })
    const [blods, setBlods] = useState([]);
    useEffect(() => {   
         getBlods().then((data) => setBlods(data))
    }, [])

    return (
        <>
            <AddBlod
                show={modalShow}
                onHide={() => setModalShow(false)}
                blod={blod}
                setBlod={setBlod}
                setBlods={setBlods}
                blods={blods}
            />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <a onClick={() => setModalShow(true)} className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-2" /> Add blod
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
                                                Provider
                                            </th>
                                            <th className="all">group</th>
                                            <th>phone</th>
                                            <th>info</th>
                                            <th>price</th>
                                            <th style={{ width: 85 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {blods.map((blod, ind) =>
                                        (

                                            <tr key={ind}>
                                                <td> {blod.name}</td>

                                                <td>{blod.group}</td>
                                                <td>{blod.phone}</td>

                                                <td>{blod.info}</td>
                                                <td>
                                                    <span >{blod.price}</span>
                                                </td>
                                                <td className="table-action">
                                                    <a className="action-icon">
                                                        <i className="mdi mdi-square-edit-outline" />
                                                    </a>

                                                    <a className="action-icon">
                                                        <i onClick={() => handelDeleteBlod(blod._id, blods, setBlods)} className="mdi mdi-delete" />
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
        </>

    )


}

export default ServiceList