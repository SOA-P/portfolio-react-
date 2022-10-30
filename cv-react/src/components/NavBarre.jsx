import React from "react";
import { Link } from "react-router-dom";
import "./NavBarreStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import  { useState} from "react"; 
const NavBarre = () => {
    const [click , setClick] = useState(false);
    const handleClick =() => setClick (!click);


  return (
    <div className="header">
      <Link to="/">
        <h1>Nédim Amajoud</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project"> Project</Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Contact">Contact </Link>
        </li>
      </ul>
      <div className="Hamburger" onClick = {handleClick}>
        {click ? (<FaTimes size={20} style={{ color:"fff"}}/>)
         : ( <FaBars size={20} style={{ color:"fff"}}/>)}
      </div>
    </div>
  );
};

export default NavBarre;
