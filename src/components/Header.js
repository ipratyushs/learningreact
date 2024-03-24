import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default Header = () => {
  // use state is used to create local state variable - Super powerful variable
  // never use a useState inside a condition
  const [btnName, setBtnName] = useState("Login");
  // if no dependency array  => useEffect is called on every render 
  // if the dependency array is empty  = [] => useEffect is called on initial render (just once)
  // if the dependency array is [something] => called everytime when [something] is changed
  
  return (
    <div id="header">
      <img
        className="cmp-logo"
        src={LOGO_URL}
        alt="cmp-logo"
      />
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="loginBtn" onClick={()=> {
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
      </nav>
    </div>
  );}