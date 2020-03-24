import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <SEO title={post.frontmatter.title} />
        <div className="project-nav">
          <Link to="/projects" className="link">
            <FaChevronLeft size="2em" />
            <FaChevronLeft size="2em" />
          </Link>
          <h1>{post.frontmatter.title}</h1>
          <Link to={post.frontmatter.next} className="link">
            <FaChevronRight size="2em" />
            <FaChevronRight size="2em" />
          </Link>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
      </Layout>
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
