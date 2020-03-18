import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">My Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">How To Reach Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
