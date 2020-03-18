import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Image from "../components/image"
import { FaGithub, FaEye } from "react-icons/fa"

const Projects = ({ data }) => {
  return (
    <div>
      <Layout pageId="work">
        <SEO title="Projects" />
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          {data.allMarkdownRemark.edges.map(post => (
            <div className="item" key={post.node.id}>
              <Link to={post.node.frontmatter.path}>
                <img src="https://i.imgur.com/epAlkDf.jpg" alt="project" />
              </Link>
              <a href="#!" className="btn-light">
                <FaEye /> Project
              </a>
              <a href="#!" className="btn-dark">
                <FaGithub /> Github
              </a>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

//  {
//    data.allMarkdownRemark.edges.map(post => (
//      <div key={post.node.id}>
//        <h3>{post.node.frontmatter.title}</h3>
//        <small>
//          Posted by {post.node.frontmatter.author} on{" "}
//          {post.node.frontmatter.date}
//        </small>
//        <br />
//        <br />
//        <Link to={post.node.frontmatter.path}>Read more</Link>
//        <br />
//        <br />
//        <hr />
//      </div>
//    ))
//  }

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
