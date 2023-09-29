import '../../assets/backend/css/vendor/fullcalendar.min.css'
import '../../assets/backend/css/icons.min.css'
import '../../assets/backend/css/app.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faList, faUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect  , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserConext } from '../../hooks/useUserContext'
import UserList from './UserList'
import DoctorList from './DoctorList'
import SpecialistList from './SpecialistList';
import AppointmentList from './AppointmentList'
import { getDoctors } from '../../api/doctorApi'
import { getUser } from '../../api/userApi'
import { countStatue } from '../../api/appApi'
import {getLogout} from '../../api/logoutApi'
import Layout from './Layout'
function Index() {
    const { user } = useUserConext();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [activeState, setActiveState] = useState('')
    const [shouldFetchData, setShouldFetchData] = useState(false)
    const [status , setState] = useState({painding:0 ,active:0})
    const [modalShow, setModalShow] = useState(false);
    useEffect(()=>{
        if(!user.IsLogin)  navigate('/login');
         else if(user.role) navigate('/');
    },[])

    useEffect(()=>{
        countStatue(2).then((res)=>setState((prev)=>({...prev , active: res.data})))
        countStatue(0).then((res)=>setState((prev)=>({...prev , painding: res.data})))
    },[status.active,status.painding])

    useEffect(() => {
        getDoctors().then((res)=>setDoctors(res));
    }, [modalShow])

    useEffect(() => {
        getUser().then((res)=>setUsers(res))
    }, [users.length])

    const handelLogout = async() =>{
        const res = await getLogout() ;
        res?navigate('/login'):'';
    }


    return (

        <div>
            <div className="wrapper">
                <div className="leftside-menu" >
                    <div className="h-100" id="leftside-menu-container" data-simplebar="" >
                        <ul className="side-nav" >
                            <li className="side-nav-title side-nav-item"> Sondani </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarDashboards"
                                    aria-expanded="false"
                                    aria-controls="sidebarDashboards"
                                    className="side-nav-link"
                                >
                                    <i className="uil-home-alt" />
                                    <span className="badge bg-success float-end">{status.active}</span>
                                    <span> Dashboards </span>
                                </a>
                                <div className="collapse" id="sidebarDashboards">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="dashboard-analytics.html">Analytics</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-crm.html">CRM</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Ecommerce</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-projects.html">Projects</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-title side-nav-item">Apps</li>
                            <li className="side-nav-item">
                                <a onClick={() => setActiveState('User')} className="side-nav-link">
                                    <i className="uil-user" />
                                    <span> User List </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a onClick={() => setActiveState('Doctor')} className="side-nav-link">
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                    <span className='m-2'> Doctor List </span>
                                </a>
                            </li>

                            <li className="side-nav-title side-nav-item">Medical</li>
                            <li className="side-nav-item">
                                <a onClick={()=>setActiveState('Specialist')} className="side-nav-link">
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                    <span className='m-2'> Specialist </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a onClick={()=>setActiveState('Appointment')} className="side-nav-link">
                                    <FontAwesomeIcon icon={faList} />
                                    <span className='m-2'> Appointment  </span>
                                </a>
                            </li>


                        </ul>

                    </div>
                </div>
                <div className="content-page">
                    <div className="content">
                        {/* Topbar Start */}
                        <div className="navbar-custom">
                            <ul className="list-unstyled topbar-menu float-end mb-0">
                             

                                <li className="dropdown notification-list">
                                    <a
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-bell noti-icon" />
                                        {status.painding?(<span class="noti-icon-badge"/>):''}
                                    </a>
                                    
                                </li>



                                <li className="notification-list">
                                    <a
                                        className="nav-link end-bar-toggle"
                                        href=""
                                    >
                                        <i className="dripicons-gear noti-icon" />
                                    </a>
                                </li>
                                <li className="dropdown notification-list">
                                    <a
                                        className="nav-link dropdown-toggle nav-user arrow-none me-0"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <span className="account-user-avatar">
                                            <FontAwesomeIcon className="rounded-circle" icon={faUser} />
                                        </span>

                                        <span>
                                            <span className="account-user-name">{user.name}</span>
                                            <span className="account-position">{(user.role == 0) ? "Admin" : "User"}</span>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                        {/* item*/}
                                        <div className=" dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>
                                        {/* item*/}
                                        <a
                                            href="/dashboard"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-account-circle me-1" />
                                            <span>My Account</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="#"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-account-edit me-1" />
                                            <span>Settings</span>
                                        </a>
                                        
                                        {/* item*/}
                                        <a
                                          
                                            className="dropdown-item notify-item"
                                            onClick={handelLogout}
                                        >
                                            <i className="mdi mdi-logout me-1" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <button className="button-menu-mobile open-left">
                                <i className="mdi mdi-menu" />
                            </button>
                           
                        </div>
                        {/* end Topbar */}
                        {/* Start Content*/}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <h4 className="page-title">{`${!activeState ? '' : activeState + ' List'}`}</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}
                            <div className="row">
                                <div className="col-12">

                                    {(activeState === '') ? <Layout user={user} /> : ''}

                                    {(activeState === 'User') ? <UserList
                                        users={users}
                                        setUsers={setUsers}

                                    /> : ''}
                                    {(activeState === 'Doctor') ? <DoctorList
                                        doctors={doctors}
                                        setDoctors={setDoctors}
                                        setModalShow={setModalShow}
                                        modalShow={modalShow}

                                    /> : ''}
                                     {(activeState === 'Appointment') ? <AppointmentList
                                        doctors={doctors}
                                        setDoctors={setDoctors}
                                        shouldFetchData={shouldFetchData}
                                        setShouldFetchData={setShouldFetchData}

                                    /> : ''}

                                    {(activeState === 'Specialist') ? <SpecialistList/> : ''}

                                    <div className="modal fade" id="event-modal" tabIndex={-1}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form
                                                    className="needs-validation"
                                                    name="event-form"
                                                    id="form-event"
                                                    noValidate=""
                                                >
                                                    <div className="modal-header py-3 px-4 border-bottom-0">
                                                        <h5 className="modal-title" id="modal-title">
                                                            Event
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body px-4 pb-4 pt-0">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="control-label form-label">
                                                                        Event Name
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        placeholder="Insert Event Name"
                                                                        type="text"
                                                                        name="title"
                                                                        id="event-title"
                                                                        required=""
                                                                    />
                                                                    <div className="invalid-feedback">
                                                                        Please provide a valid event name
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="control-label form-label">
                                                                        Category
                                                                    </label>
                                                                    <select
                                                                        className="form-select"
                                                                        name="category"
                                                                        id="event-category"
                                                                        required=""
                                                                    >
                                                                        <option value="bg-danger" >
                                                                            Danger
                                                                        </option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">
                                                                        Please select a valid event category
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    id="btn-delete-event"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light me-1"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-success"
                                                                    id="btn-save-event"
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>{" "}
                                      
                                        </div>{" "}
                                     </div>
                              
                                </div>
                             
                            </div>{" "}
                         
                        </div>{" "}
                   
                    </div>{" "}
            
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">© unicon - Coderthemes.com</div>
                
                            </div>
                        </div>
                    </footer>
                  
                </div>
    
            </div>



        </div>
    )
}

export default Index; 