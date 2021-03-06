/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
