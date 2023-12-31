import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/frontend/css/style.css';
import Main from './pages/Home/Index';
import './App.css'
import About  from './pages/About/Index';
import Services from './pages/Service/index';
import Contact from './pages/Contact/index';
import Doctors from './pages/Doctors/index';
import Login from './pages/Auth/login';
import SignUp from './pages/Auth/SignUp';
import axios from 'axios';
import { UserContextProvider } from './contexts/userContext';


function App() {

  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/doctor' element={<Doctors/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App;
