import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useData } from '../../hooks/useData'

export default function Login() {

    const navigate = useNavigate();
    const {data ,setData} = useData();
    const sumbitHandeler = async (e) => {
        e.preventDefault();
        
        const { email, password } = data;
        try {

            const responce = await axios.post('/login', {
                email, password
            });

            if (responce.error) {
                console.log(responce.error);
            } else {
                setData({});
                navigate('/dashboard')

            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                                alt="Phone image"
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={sumbitHandeler}>
                                <div className="form-outline mb-4">
                                    <input
                                        value={data.email}
                                        type="email"
                                        id="form1Example13"
                                        className="form-control form-control-lg"
                                        onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example13">
                                        Email address
                                    </label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        value={data.password}
                                        id="form1Example23"
                                        className="form-control form-control-lg"
                                        onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example23">
                                        Password
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Log in
                                </button>
                                <p className="m-3 pb-lg-2" style={{ color: "#393f81" }}>
                                    Don't have an account? <Link to="/signup" style={{ color: "#393f81" }} >
                                        Register here </Link>
                                </p>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                <a
                                    className="btn btn-primary btn-lg btn-block"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="#!"
                                    role="button"
                                >

                                    <FontAwesomeIcon icon={faGoogle} className='me-2' />
                                    Continue with Google
                                </a>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}


