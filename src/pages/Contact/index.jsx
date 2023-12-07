import React from 'react'
import Header from '../Home/components/Header'
import Navigation from '../Home/components/Navigation'
import Footer from '../Home/components/Footer'
import { useState } from 'react'
import { handelSubmit } from '../../api/contructApi'
import { useUserConext } from '../../hooks/useUserContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function() {
    const {user} = useUserConext();
    const navigator = useNavigate();
    const [question ,setquestion] = useState({
        userId:user.id,
        name:'',
        subject:'' ,
        email:'',
        message:''
    })
    const handelForm = async(e) =>{
        if(user.IsLogin){
            const res  =  handelSubmit(question , setquestion)
            if(res) navigator(-1);
        }else{
            toast('please login first  ....' )
        }    
    }
    return (
        <div>
                <Header/>
                <Navigation/>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h1 className="mb-3 text-center">Ask A Question</h1>
                            <form >
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="your-name" className="form-label">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            required=""
                                            defaultValue={question.value}
                                            onChange={(e) => setquestion((prev) =>({...prev , name:e.target.value}))}
                                            
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
                                            defaultValue={question.email}
                                            onChange={(e) => setquestion((prev) =>({...prev , email:e.target.value}))}
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
                                            defaultValue={question.subject}
                                            onChange={(e) => setquestion((prev) =>({...prev , subject:e.target.value}))}
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
                                      
                                            defaultValue={question.message}
                                            onChange={(e) => setquestion((prev) =>({...prev , message:e.target.value}))}
                                        />
                                    </div>
                                    <input className='btn btn-primary mt-5 ' defaultValue="Send" onClick={handelForm}/>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
    
        </div>
    )
}
