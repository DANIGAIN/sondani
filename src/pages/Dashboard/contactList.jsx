import React, { useEffect ,useState} from 'react'
import { getContructs , handelDelete } from './../../api/contructApi';


function ContactList() {
    const [question ,setquestion] = useState([])
    
    
    useEffect(() => {
         getContructs().then((req) => setquestion(req))
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
                                            <th className="all">person</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>Message</th>
                                            <th style={{ width: 85 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {question.map((data ,ind) =>(
                                            <tr key={ind}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.subject}</td>
                                                <td>{data.message}</td>
                                                <td className="table-action">
                                                        <a className="action-icon">
                                                            <i className="mdi mdi-delete" onClick={()=>handelDelete(data._id,question, setquestion)} />
                                                        </a>
                                                    </td>
                                            </tr>
                                        ))
                                        }
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

export default ContactList