import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginD = () => {
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', {
        email,
        password,
      })
      console.log(res);

        // setData({})
        navigate('/dashboard')
        

    } catch (error) {
        console.log(error);
        toast.error(error);

    }
  };

  return (
    <div>
        <form onSubmit={loginUser}>

    <input type='text'  onChange={(e)=>setEmail(e.target.value)} className='border border-black'/>
    <input type='text'  onChange={(e)=>setPassword(e.target.value)} className='border border-black'/>
    <button className='border border-black p-2'>login</button>
        </form>

    </div>
  )
}

export default LoginD