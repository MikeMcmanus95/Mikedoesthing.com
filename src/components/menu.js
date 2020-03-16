import React from "react"
import { Link } from "gatsby"
import "../css/index.css"

const Menu = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="navlink">
          <Link to="/">Home</Link>
        </li>
        <li className="navlink">
          <Link to="/about">About</Link>
        </li>
        <li className="navlink">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
