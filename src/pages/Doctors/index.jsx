import React, { useState } from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useUserConext } from '../../hooks/useUserContext'
import AddDoctor from '../../components/addDoctor'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
export default function () {

    const { user, setUser } = useUserConext();
    const [modalShow, setModalShow] = useState(false);
    const [doctors, setDoctors] = useState([]);

    const getDoctor = async () => {
        await axios.get('/doctor')
            .then((res) => {
                setDoctors(res.data);
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    useEffect(() => {
        getDoctor();
    }, [doctors])


    return (
        <div>
            <Header />
            <Navigation />
            <AddDoctor
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-between mb-3">
                    <span>Doctors</span>
                    {(user.isAdmin) ? <button
                        onClick={() => setModalShow(true)}
                        className="btn btn-success add">Add Doctors</button> : ''
                    }
                </div>
                <div className="row g-2">
                    {doctors.map((doctor, ind) => {
                        return (<div key={ind} className="col-md-3">
                            <div className="card p-2 py-3 text-center">
                                <div className="img mb-2">
                                    <img
                                        src={doctor.image}
                                        width={70}
                                        className="rounded-circle"
                                    />
                                </div>
                                <h5 className="mb-0">{doctor.name}</h5>
                                <small>{doctor.specialist}</small>
                                <div className="ratings mt-2">
                                    {Array.from({ length: parseInt(doctor.rating) }).map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />
                                        
                                    ))}

                                </div>
                                <div className="mt-4 apointment">
                                    <button className="btn btn-success text-uppercase">
                                        Book Appointment
                                    </button>  
                                    <FontAwesomeIcon color='danger' icon={ faTrashCan}/>
                                    
                                </div>
                                
                                     
                            
                                
                            </div>
                        </div>

                        )
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}
