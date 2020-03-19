import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  const resumePath = data?.allFile?.edges[0]?.node?.publicURL

  return (
    <Layout pageId="home" bgImageClass="bgImage">
      <SEO title="Home" />
      <h1 className="lg-heading">
        Michael <span className="text-secondary">McManus</span>
      </h1>
      <h2 className="sm-heading">
        Fullstack Web Developer, Software Engineer & Entrepreneur ||{" "}
        <span>
          <Link className="text-secondary" to={resumePath} target="_blank">
            Full Resume
          </Link>
        </span>
      </h2>
      <div className="icons">
        <a href="https://www.instagram.com/mike_givesyouhell/">
          <FaInstagram size="2em" />
        </a>
        <a href="https://www.linkedin.com/in/mikemcmanus95/">
          <FaLinkedin size="2em" />
        </a>
        <a href="https://github.com/MikeMcmanus95">
          <FaGithub size="2em" />
        </a>
      </div>
    </Layout>
  )
}

export const resumeQuery = graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
