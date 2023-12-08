import React , {createContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Home/Index';
import './App.css'
import About from './pages/About/Index';
import Services from './pages/Service/index';
import Contact from './pages/Contact/index';
import Doctors from './pages/Doctors/index';
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import NotFound  from './pages/NotFound/index'
import Success from './pages/Success/index'
import axios from 'axios';
import Dashboard from './pages/Dashboard/Index'
import Appointment from './pages/Appointment/Index'
import { UserContextProvider } from './contexts/userContext';
import { useApp } from './hooks/useApp';
export const AppContext = createContext({});

function App() {
  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;
  const { appointments, setAppointments } = useApp();

  return (
    <UserContextProvider>
      <AppContext.Provider value={{ appointments, setAppointments}}>
        <BrowserRouter>
          <Routes>
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/success/:id' element={<Success/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/doctor' element={<Doctors />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </UserContextProvider>
  )
}

export default App;
