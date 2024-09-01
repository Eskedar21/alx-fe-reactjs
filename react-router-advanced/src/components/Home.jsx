import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <nav>
        <ul>
          <li><Link to="Profile">Profile</Link></li>
          <li><Link to="About">About</Link></li>
        </ul>
      </nav>
      <h1>Welcome to Home page</h1> 
    </div>
  )
}
