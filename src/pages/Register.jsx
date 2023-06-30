import React, { useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        profession:"",
        email: "",
        password: "",
      });
      
  const registerUser = async (e) => {
    e.preventDefault();
    const {name,profession,email,password} = data;
    try {
      const {data} = await axios.post("/register", {
        name,profession,email,password
      })
      // console.log(data)

      if(data.error){
        toast.error(data.error)
      }
      else{
        navigate("/login");
        setData({})
      
      }
    } catch (error) {
      console.log(error);
      
    }
    
  };
  return (
    <>
    <div className=" bg-[#353b48] flex justify-center items-center h-[100vh] w-full">
      <form onSubmit={registerUser}>
      <div className="flex flex-col border border-red-500  shadow-2xl bg-[#353b40] rounded h-[400px]  justify-center items-center p-3">

        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Enter name"
          className="p-2 m-1 w-[250px]"
        />
        <input
          type="text"
          value={data.profession}
          onChange={(e) => setData({ ...data, profession: e.target.value })}
          placeholder="Enter profession"
          className="p-2 m-1 w-[250px]"
        />
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value})}
          placeholder="Enter email"
          className="p-2 m-1 w-[250px]"
        />
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="Enter password"
          className="p-2 m-1 w-[250px]"
        />
        <button type="submit" className="bg-red-300 m-1 p-2 w-[250px] hover:bg-black hover:text-red-500 duration-500">
          Register
        </button>
    </div>

      </form>
    </div>
    <Footer/>
    </>

  );
};

export default Register;
