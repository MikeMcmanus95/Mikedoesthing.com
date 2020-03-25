import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <SEO title={post.frontmatter.title} />
      <div className="proj-nav">
        {/* <Link to="/projects">
          <FaChevronLeft size="2em" />
          <FaChevronLeft size="2em" />
        </Link> */}
        <div className="title-wrapper">
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.date}</h4>
        </div>
        {/* {post.frontmatter.next ? (
          <Link to={post.frontmatter.next}>
            <FaChevronRight size="2em" />
            <FaChevronRight size="2em" />
          </Link>
        ) : (
          <div />
        )} */}
      </div>
      <div
        className="proj-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        next
      }
    }
  }
`

export default ProjectPost
