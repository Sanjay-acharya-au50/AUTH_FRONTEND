
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UseProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'

// https://sanjay-authentication-backend.onrender.com
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {


  return (
    <UseProvider>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </UseProvider>
  )
}

export default App
