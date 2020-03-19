import React from "react"
import { FaChevronLeft } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="javascript:history.back()">
      <FaChevronLeft size="2rem" />
      <FaChevronLeft size="2rem" />
    </Link>
  </Layout>
)

export default NotFoundPage
