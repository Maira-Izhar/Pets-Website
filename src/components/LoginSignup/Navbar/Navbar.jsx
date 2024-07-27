import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
   

  return (
    <nav className="navbar">
        <h1>The Pet Shop</h1>
        <div className="links">
        <a href="/home">Home</a>
        </div>
  </nav>
  )
}

export default Navbar;