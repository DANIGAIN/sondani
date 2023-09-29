import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Layout(props) {

    const navigate  = useNavigate();

    return (
        <div><>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                     
                                <div className="card-header pt-4 pb-4 text-center bg-secondary">
                                    <p className='h4 text-light'>Welcome to Sondani</p>
                                </div>
                                <div className="card-body p-4">
                                    <div className="text-center m-auto">
    
                                        <h4 className="text-dark-50 text-center mt-4 fw-bold">
                                            {props.user.name}
                                        </h4>
                                        <p className="text-muted mb-4">
                                              
                                        </p>
                                    </div>
                                    <form action="index.html">
                                        <div className="mb-0 text-center">
                                            <button className="btn btn-primary" onClick={()=>navigate('/')} type="submit">
                                                <i className="mdi mdi-home me-1" /> Back to Home
                                            </button>
                                        </div>
                                    </form>
                                </div>
                           
                            </div>
                          
                        </div>
                     
                    </div>
                  
                </div>
              
            </div>
       
        </>
        </div>
    )
}

export default Layout