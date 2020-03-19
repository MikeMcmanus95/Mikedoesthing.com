import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
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
          {data.allProjectsJson.edges.map(post => {
            console.log(post.node.image)
            return (
              <div className="item" key={post.node.title}>
                <Link to={post.node.path}>
                  <Img fluid={post.node.image.childImageSharp.fluid} />
                </Link>
                <a href="#!" className="btn-light">
                  <FaEye /> Project
                </a>
                <a href="#!" className="btn-dark">
                  <FaGithub /> Github
                </a>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export const projQuery = graphql`
  query projectIndexQuery {
    allProjectsJson {
      edges {
        node {
          title
          path
          author
          image {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
