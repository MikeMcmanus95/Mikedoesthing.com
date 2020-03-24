import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <SEO title={post.frontmatter.path} />
        <Link to="/projects">Go Back</Link>
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
      }
    }
  }
`

export default ProjectPost
