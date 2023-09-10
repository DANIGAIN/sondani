import React from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'


export default function
    () {
    return (
        <div>
                <Header/>
                <Navigation/>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h1 className="mb-3 text-center">Ask A Question</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="your-name" className="form-label">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="your-name"
                                            name="your-name"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="your-email" className="form-label">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="your-email"
                                            name="your-email"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="your-subject" className="form-label">
                                            Your Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="your-subject"
                                            name="your-subject"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="your-message" className="form-label">
                                            Your Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="your-message"
                                            name="your-message"
                                            rows={5}
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <input className='btn btn-primary mt-5 ' value="Send"/>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
    
        </div>
    )
}
