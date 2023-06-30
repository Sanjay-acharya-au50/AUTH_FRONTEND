import React from "react";
import {  useEffect,useContext } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import dash from '../pages/dash.png'
import '../pages/page.css'

const Dashboard = () => {


  const { user, setUser } = useContext(UserContext);
    useEffect(()=>{
      const func = async () => {

        const res = await axios("/profile")
        setUser(res.data)
      }
      func();
    
  }, []);
  console.log("user:",user)

  

  return (
    <div className="main">
      <img src={dash} className="obj"/>
      <div className="dashboad">

      {user && (
        <>
          <h1 className="text-[30px] md:text-[40px] pl-3 md:pl-10">Dear {user.name}!</h1>
          <h1 className="text-[20px] md:text-[25px] pl-3 md:pl-10">Wishing you continued success, fulfillment, on your {user.profession} journey!!</h1>


        </>
      )}
      </div>


    </div>
  );
};

export default Dashboard;
