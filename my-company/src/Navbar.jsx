import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/services"}> Services </Link>
        <Link to={"/contact"}> Contacts </Link>
    </nav>
  )
}

export default Navbar