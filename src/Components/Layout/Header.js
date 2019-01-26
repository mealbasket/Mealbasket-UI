import React from 'react'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="mr-2" width="30" height="30" alt="mb-logo" />
          MealBasket
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
        <Link to="/login" className="mr-2">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav >
  )
}

export default Header;
