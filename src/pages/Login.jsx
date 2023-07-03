import React, { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({

    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const {email, password} = data;
    try {
      const {data} = await axios.post('/login', {
        email,
        password,
      })
      if(data.error){
         toast.error(data.error);
         navigate('/')

      }
        setData({})
        navigate('/dashboard')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className=" bg-[#353b48] flex justify-center items-center h-[100vh] w-full">


      <form onSubmit={loginUser} >
        <div className="flex flex-col border border-red-500  shadow-2xl bg-[#353b40] rounded h-[400px]  justify-center items-center p-3">

        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value})}
          placeholder="Enter email"
          className=" m-1 p-2 w-[250px]"
        />
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="Enter password"
          className=" m-1 p-2 w-[250px]"
        />
        <button type="submit" className="bg-red-300  hover:bg-black hover:text-red-500 duration-500 m-1 p-2 w-[250px]">
          Login
        </button>
        </div>

      </form>
    </div>

      </>


  );
};

export default Login;
