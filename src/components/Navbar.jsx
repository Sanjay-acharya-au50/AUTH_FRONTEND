import React, {  useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/nav.css";
import { UserContext } from "../../context/userContext";
import toast from 'react-hot-toast'
import { useEffect } from "react";
import axios from 'axios'



const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
const navigate = useNavigate()

  useEffect(()=>{
    const myFun = async () => {

      const res = await axios.get("/profile")
      console.log(res)
      if(res.status  === 220){
        toast.success("works")
        setUser(res.data)
      }else{
        toast.error(res.data);
      }

    }
    myFun();
  },[])

  const handleLogout = async () => {



    const logout = await axios.post('/logout');
    console.log(logout)
   


    setUser(null);

    toast.success("logout");
    navigate("/");
  };

  return (
    <div className="h-[50px]  bg-[#e84118] text-white w-full flex justify-between items-center p-1 md:p-8">
      <div>
        <Link className="m-2" to="/">
          <div className="nav text-[15px] md:text-[20px]">

            MERN / Authenitication
          </div>
        </Link>
      </div>
      <div className="flex">
        {user ?  (
          <p className=" border border-red-300 p-2 hover:bg-white hover:text-red-400 duration-500" onClick={handleLogout}>logout</p>
        ) : (
          <>
            <Link className="m-2" to="/login">
              <div className="border border-red-300 p-2 hover:bg-white hover:text-red-400 duration-500">

                Login
              </div>
            </Link>
            <Link className="m-2" to="/register">
              <div className="border border-red-300 p-2 hover:bg-white hover:text-red-400 duration-500">

                Register
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
