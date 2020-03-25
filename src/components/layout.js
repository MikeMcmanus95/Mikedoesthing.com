/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import "../scss/main.scss"

const Layout = ({ children, pageId, currentIdx }) => {
  return (
    <div>
      <Menu currentIdx={currentIdx} />
      <main id={pageId}>{children}</main>
      <div>
        <footer id="main-footer">
          © Michael McManus {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
