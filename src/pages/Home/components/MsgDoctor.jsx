import React from 'react'

import tm6 from '../../../assets/frontend/img/tm6.jpg';

export default function MsgDoctor() {
    return (
        <section className="msg_doctor">
            <div className="container">
                <div className="section-title">
                    <h5>be well and stay healthy</h5>
                    <h1>massage from our experienced doctor’s</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="tm-service">
                            <div className="row">
                                <div className="col-md-4 pr-0">
                                    <div className="thumb">
                                        <img src={tm6} alt="image" />
                                        <a href="#" className="icon bg-theme-colored1">
                                            <i className="flaticon-medical-broken29" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="content">
                                        <h4 className="mt-0 font-20">dr. jone doe</h4>
                                        <h6>BCS(2010), mBBS(Biology), B.Sc(Heart)</h6>
                                        <h5>heart specialist</h5>
                                    </div>
                                </div>
                            </div>
                            <p>
                                The hospital is providing cardiology services by 2 modern cath-lab
                                and round the clock CCU facility including cardiac surgery (Adult
                                &amp; Pediatric) by 2 cardiac OT by
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tm-service">
                            <div className="row">
                                <div className="col-md-4 pr-0">
                                    <div className="thumb">
                                        <img src={tm6} alt="image" />
                                        <a href="#" className="icon bg-theme-colored1">
                                            <i className="flaticon-medical-broken29" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="content">
                                        <h4 className="mt-0 font-20">dr. jone doe</h4>
                                        <h6>BCS(2010), mBBS(Biology), B.Sc(Heart)</h6>
                                        <h5>heart specialist</h5>
                                    </div>
                                </div>
                            </div>
                            <p>
                                The hospital is providing cardiology services by 2 modern cath-lab
                                and round the clock CCU facility including cardiac surgery (Adult
                                &amp; Pediatric) by 2 cardiac OT by
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
