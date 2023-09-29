import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../../hooks/useData';
import  {signupApi}  from '../../api/signupApi';
export default function SignUp() {
    const {user , setUser} = useData();
    const navigate = useNavigate();

    const sumbitHandeler = async(e) =>{
        e.preventDefault();
        const res = await signupApi(user);
        res?navigate(-1):'';
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
                                        type="text"
                                        id="form1Example11"
                                        className="form-control form-control-lg"
                                        value={user.name}
                                        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
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
                                        value={user.email}
                                        onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="form1Example13">
                                        Email address
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        name="password"
                                        autoComplete="on"
                                        id="pid"
                                        className="form-control form-control-lg"
                                        value={user.password}
                                        onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                                    />
                                    <label className="form-label" htmlFor="pid">
                                        Password
                                    </label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        name="conform-password"
                                        autoComplete="on"
                                        id="cpassword"
                                        className="form-control form-control-lg"
                                    />
                                    <label className="form-label" htmlFor="cpassword">
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


