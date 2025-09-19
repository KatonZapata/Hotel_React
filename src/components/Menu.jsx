import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
        {/* <!-- Navbar --> */}
        <div className="w3-bar w3-white w3-large">
            <NavLink to="/" className={({isActive})=>(isActive ? "w3-red" : "" )+ " w3-bar-item w3-button w3-mobile"}><i className="fa fa-bed w3-margin-right"></i>Logo</NavLink>
            <NavLink to="/Rooms" className={({isActive})=>(isActive ? "w3-red" : "" )+ " w3-bar-item w3-button w3-mobile"}>Rooms</NavLink>
            <NavLink to="/About" className={({isActive})=>(isActive ? "w3-red" : "" )+ " w3-bar-item w3-button w3-mobile"}>About</NavLink>
            <NavLink to="/Ours" className={({isActive})=>(isActive ? "w3-red" : "" )+ " w3-bar-item w3-button w3-mobile"}>Ours</NavLink>
            <NavLink to="/Contact" className={({isActive})=>(isActive ? "w3-red" : "" )+ " w3-bar-item w3-button w3-right w3-mobile"}>Contact</NavLink>
        </div>
    </>
  )
}
