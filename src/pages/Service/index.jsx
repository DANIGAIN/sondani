import React from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import ServiceSection from '../Home/components/ServiceSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Home/components/Footer'

export default function index() {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                        <div className="card p-5 mt-3">
                            <h3 className="heading mt-5 text-center">
                            Wellcome to Pathology Test Booking System All pathology Thest Free
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
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </a>{" "}
                                </div>{" "}
                            </div>{" "}
                            {/* <div className="row mt-4 g-1 px-4 mb-5">
                                {" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/Mb8kaPV.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Account</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/ueLEPGq.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Payments</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/tmqv0Eq.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Delivery</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/D0Sm15i.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Product</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/Z7BJ8Po.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Return</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-md-2">
                                    {" "}
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        {" "}
                                        <img src="https://i.imgur.com/YLsQrn3.png" width={50} />{" "}
                                        <div className="text-center mg-text">
                                            {" "}
                                            <span className="mg-text">Guarantee</span>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "} */}
                        </div>{" "}
                    </div>{" "}
            </div>

           <ServiceSection />

           <div className='continer mt-4'>
             <div className='row d-flex justify-content-center'>
                <div className='col-md-9'>
                    <div className='card p-4 mt-3'>
                        <div className='heading mt-2 h5 text-secondary '>
                            Total Selected test :
                        </div>
                        <div className='heading mt-2 h5 text-secondary '>
                            Total test (with include test):
                        </div>
                        <div className='heading mt-2 h5  text-secondary'>
                            Total  Bill:
                        </div>
                        <input className='btn btn-primary mt-2 ' value="Go For payment"/>
                    </div>
                </div>
                
             </div>

           </div>
          <Footer/>

        </div>
    )
}
