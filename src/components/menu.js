import React, { useState } from "react"
import { Link } from "gatsby"
import Image from "./profileImage"

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [menuBtn, setMenuBtn] = useState("menu-btn")
  const [menu, setMenu] = useState("menu")
  const [menuNav, setMenuNav] = useState("menu-nav")
  const [menuBranding, setMenuBranding] = useState("menu-branding")
  const [navItem, setNavItem] = useState([
    "nav-item",
    "nav-item",
    "nav-item",
    "nav-item",
  ])

  const toggleMenu = () => {
    if (!showMenu) {
      setMenuBtn("menu-btn show")
      setMenu("menu show")
      setMenuNav("menu-nav show")
      setMenuBranding("menu-branding show")
      setNavItem([
        "nav-item show",
        "nav-item show",
        "nav-item show",
        "nav-item show",
      ])
      setShowMenu(true)
    } else {
      setMenuBtn("menu-btn")
      setMenu("menu")
      setMenuNav("menu-nav")
      setMenuBranding("menu-branding")
      setNavItem(["nav-item", "nav-item", "nav-item", "nav-item"])
      setShowMenu(false)
    }
  }

  return (
    <header>
      <div className={menuBtn} onClick={toggleMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className={menu}>
        <div className={menuBranding}>
          <div>
            <Image portraitClass={"portrait"} imgPath="profile.png" />
          </div>
        </div>
        <ul className={menuNav}>
          <li className={navItem[0]}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className={navItem[1]}>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className={navItem[2]}>
            <Link to="/projects" className="nav-link">
              My Work
            </Link>
          </li>
          <li className={navItem[3]}>
            <Link to="/contact" className="nav-link">
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
