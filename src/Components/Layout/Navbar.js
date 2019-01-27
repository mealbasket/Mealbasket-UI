import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="" className="nav-link">Recipies</Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link" href="#">Ingredients</Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link" href="#">Help</Link>
          </li>
        </ul>
        <Link to="/" className="navbar-brand">
          <img src={logo} height="110" alt="mb-logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/sign-in" className="mr-4">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up">Register</Link>
          </li>
        </ul>
      </div>

    </nav >
  )
}

export default Navbar;
