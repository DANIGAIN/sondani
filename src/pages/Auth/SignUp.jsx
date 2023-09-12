import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../hooks/useData';

export default function SignUp() {

    const navigate = useNavigate();
    const {data , setData} = useData();
    const submitHandler = async (e) => {
        e.preventDefault();
        
        const { name, email, password, isAdmin } = data;
        try {

            const response = await axios.post('/signup', {
                name, email, password, isAdmin
            });
            if (response.error) {

                console.log(response.error);

            } else {
                setData({});
                navigate('/login');
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
                            <form onSubmit={submitHandler}>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="form1Example11"
                                        className="form-control form-control-lg"
                                        value={data.name}
                                        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example11">
                                        Full Name
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form1Example13"
                                        className="form-control form-control-lg"
                                        value={data.email}
                                        onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example13">
                                        Email address
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example23"
                                        className="form-control form-control-lg"
                                        value={data.password}
                                        onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example23">
                                        Password
                                    </label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example22"
                                        className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="form1Example22">
                                        Conform Password
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Sign Up
                                </button>
                                <p className="m-2 pb-lg-2" > have an account? <Link to="/login">Login here</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}


