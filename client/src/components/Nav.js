import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

var link = {
    margin:"20px",
    padding:"8px 15px",
    paddingLeft:"15px",
    paddingRight:"15px",
    color:"white",
    textDecoration:"none"
}

var active = {
    color: "#FFB344",
    fontSize:"1.15em",
    borderBottom: "2px solid #FFB344"
}

function Nav(){
    return  <>
        <nav className="p-2 text-end bg-dark" style={{opacity:"0.9"}}>
            <NavLink style={link} activeStyle={active} exact to="/home">Home</NavLink>
            <NavLink  style={link} activeStyle={active} exact to="/cart">Cart</NavLink>
            <NavLink  style={link} activeStyle={active} exact to="/profile">Profile</NavLink>            
        </nav>
    </>
}

export default Nav;