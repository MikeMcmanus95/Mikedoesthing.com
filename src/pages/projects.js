import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  return (
    <div>
      <Layout>
        <SEO title="Projects" />
        <h1>My Projects</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const projQuery = graphql`
  query projectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`

export default Projects
