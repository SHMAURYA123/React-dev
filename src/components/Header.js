import { useContext, useState } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";

const Header=()=>{
   const [btnName,setBtnName]=useState("Login");  
   const onlineStatus=useOnlineStatus();

   const {loggedInUser}=useContext(UserContext);
  
  return ( 
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <div className="logo-container">
       <img className="w-32" src={LOGO_URL}/> </div>
    
    <div className="flex items-center">
      <ul className="flex  p-4 m-4">
        <li className="px-4">
          OnlineStatus:{onlineStatus? "✅":"🛑"}
        </li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About Us</Link></li>
        <li className="px-4"><Link to="/contact">Contact Us</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4">Cart</li>
        <button className="login" onClick={()=>{
          btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
        }}>{btnName}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
    </div>
    </div>
  )};

  export default Header;