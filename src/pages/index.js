import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import StyledBackgroundSection from "../components/backgroundImage"

const IndexPage = ({ data }) => {
  const resumePath = data?.allFile?.edges[0]?.node?.publicURL

  return (
    <Layout pageId="home" currentIdx={0}>
      <StyledBackgroundSection id="bg-img" />
      <SEO title="Home" />
      <h1 className="lg-heading">
        Michael <span className="text-secondary">McManus</span>
      </h1>
      <h2 className="sm-heading">
        Software Engineer & Fullstack Web Developer ||{" "}
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
        <a
          href="https://www.linkedin.com/in/mikemcmanus95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="2em" />
        </a>
        <a
          href="https://github.com/MikeMcmanus95"
          target="_blank"
          rel="noopener noreferrer"
        >
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
