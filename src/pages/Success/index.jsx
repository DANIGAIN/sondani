import React from 'react'
import { Link } from 'react-router-dom'

function index() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">202</h1>
                <p className="fs-3">
                    {" "}
                    <span className="text-danger">Ohh!</span> Payment is successfuly compleated .
                </p>
                <p className="lead">Blod is perched .</p>
                <Link className='btn btn-primary' to={'/'}> Go home</Link>
            </div>
        </div>
    )
}

export default index