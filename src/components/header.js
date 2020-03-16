import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CSS from "../css/index.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 id={CSS.siteTitle}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
