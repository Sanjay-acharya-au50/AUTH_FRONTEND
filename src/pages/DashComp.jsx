import { useContext } from "react";
import React from  'react'
import { UserContext } from "../../context/userContext";




const DashComp = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)


  return (
    <div>DashComp


            <div>{user.name}</div>
    </div>
  )
}

export default DashComp