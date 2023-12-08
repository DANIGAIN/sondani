import React, { useState } from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import ServiceSection from '../Home/components/ServiceSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Home/components/Footer'
import { stripepaymentApi } from '../../api/bladApi'
import { toast } from 'react-toastify'

import { useUserConext } from '../../hooks/useUserContext'


export default function index() {
    const {user} = useUserConext()
    const [orders, setOrders] = useState({
        userId: user.id,
        serviceId: '',
        group: '',
        total: 0,
        quantity: 0

    })

    return (
        <div>
            <Header />
            <Navigation />
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="card p-5 mt-3">
                        <h3 className="heading mt-5 text-center">
                            Search what ever blod as you need
                        </h3>
                        <div className="d-flex justify-content-center px-5">
                            <div className="search">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search..."
                                    name=""
                                />{" "}
                                <a href="#" className="search-icon">
                                    {" "}
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>

            <ServiceSection
                setOrders={setOrders}
                orders={orders}
            />

            <div className='continer mt-4'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-9'>
                        <div className='card p-4 mt-3'>
                            <div className='heading mt-2 h5 text-secondary '>
                                Gruop : {orders.group}
                            </div>
                            <div className='heading mt-2 h5 text-secondary '>
                                quentity : {orders.quantity}
                            </div>
                            <div className='heading mt-2 h5  text-secondary'>
                                Total  Bill : {orders.total}
                            </div>

                            {orders.total > 0 ?

                                <input className='btn btn-primary mt-2 ' defaultValue="Go For payment With Stripe"
                                    onClick={() => stripepaymentApi(orders)}
                                /> :
                                

                                <input className='btn btn-secondary mt-2 ' defaultValue="Go For payment With Stripe"
                                   onClick={()=>  toast("please booking first  .... ")}
                                />

                            }

                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}
