import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div id="header" className="flex justify-between sm:bg-violet-100 lg:bg-blue-100 shadow-md mb-2">
      <div className="logo-container">
      <img
        className="w-40"
        src={LOGO_URL}
        alt="cmp-logo"
      />
      </div>
      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
      <div> Status { onlineStatus ? '🟢' : '🔴' }</div>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4"> 
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            < Link to="/contact">Contact</Link>
          </li>
        <button className="loginBtn" onClick={()=> {
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
        </ul>
      </nav>
    </div>
  );}