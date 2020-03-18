import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const IndexPage = () => (
  <Layout pageId="home" bgImageClass="bgImage">
    <SEO title="Home" />
    <h1 className="lg-heading">
      Mike <span className="text-secondary">McManus</span>
    </h1>
    <h2 className="sm-heading">
      Fullstack Web Developer, Software Engineer & Entrepreneur
    </h2>
    <div className="icons">
      <a href="https://www.linkedin.com/in/mikemcmanus95/">
        <FaLinkedin size="2em" />
      </a>
      <a href="https://github.com/MikeMcmanus95">
        <FaGithub size="2em" />
      </a>
    </div>
  </Layout>
)

export default IndexPage