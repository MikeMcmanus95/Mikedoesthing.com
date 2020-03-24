import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import StyledBackgroundSection from "../components/backgroundImage"

const IndexPage = ({ data }) => {
  const resumePath = data?.allFile?.edges[0]?.node?.publicURL

  return (
    <Layout pageId="home">
      <StyledBackgroundSection id="bg-img" />
      <SEO title="Home" />
      <h1 className="lg-heading">
        Michael <span className="text-secondary">McManus</span>
      </h1>
      <h2 className="sm-heading">
        Fullstack Web Developer, Software Engineer & Teacher ||{" "}
        <span>
          <a
            className="text-secondary"
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Resume
          </a>
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
