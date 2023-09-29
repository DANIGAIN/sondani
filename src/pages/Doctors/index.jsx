import React, { useState } from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useUserConext } from '../../hooks/useUserContext'
import AddDoctor from '../../components/addDoctor'
import { useEffect } from 'react'
import { handelDeleteDoctor } from '../../api/doctorApi'
import { getDoctors } from '../../api/doctorApi'
export  default  function  () {

    const { user } = useUserConext();
    const [modalShow, setModalShow] = useState(false);
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        getDoctors().then((res)=>{
            setDoctors(res);
        })
      
    }, [modalShow])


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
                    {(user.role == 0) ? <button
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
                                <div className="row">
                                    {doctor.specialist.map((sp, ind) => (
                                        <div className="col" key={ind}>
                                            {sp.category}
                                        </div>
                                    ))}
                                </div>
                                <div className="ratings mt-2">
                                    {Array.from({ length: parseInt(doctor.rating) }).map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />

                                    ))}

                                </div>
                                <div className="mt-4 apointment">
                                    <button className="btn btn-success text-uppercase">
                                        Book Appointment
                                    </button>
                                    {(user.role == 0) ? (
                                        <button className='btn btn-danger mt-1' onClick={() => handelDeleteDoctor(doctor.id ,doctors, setDoctors)}>Delete</button>
                                    ) : ''}

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
