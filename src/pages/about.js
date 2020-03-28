import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/profileImage"
import { FaJsSquare, FaNode, FaReact, FaGitAlt } from "react-icons/fa"

const About = ({ data }) => {
  const resumePath = data?.allFile?.edges[0]?.node?.publicURL

  return (
    <div>
      <Layout pageId="about" currentIdx={1}>
        <SEO title="About" />
        <h2 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h2>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <Image portraitClass="bio-image" imgPath="profile.png" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I'm a current Software Engineer Fellow and recent graduate of
              Fullstack Academy, with interests in Web and Mobile development. I
              started my journey as a Software Engineer during my Junior year at
              Baruch College when I took a course in iOS development taught by
              CodePath, Inc. After graduating from Baruch in 2019, I knew that I
              needed more education, so I decided to apply to Fullstack Academy.
              I enjoy building lean, practical applications and learning new
              things along the way. In my free time you can find me playing
              guitar, skateboarding or playing WoW. You can view my full resume{" "}
              <a
                className="text-secondary"
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </p>
            <h3 className="text-secondary">Skills & Technologies</h3>
            <div className="skills">
              <FaJsSquare size="2.5rem" />
              <FaNode size="2.5rem" />
              <FaReact size="2.5rem" />
              <FaGitAlt size="2.5rem" />
            </div>
          </div>
          <div className="job job-1">
            <h3>Fullstack Academy of Code</h3>
            <h6>Software Engineer Teaching Fellow</h6>
            <p>
              Worked in an agile engineering team and helped guide over 40
              students through 17-week immersive software engineering program
              based in New York City centered on full-stack JavaScript
              development, including Node.js, Express, PostgreSQL databases,
              React and Redux, along with HTML & CSS, and CS fundamentals.
            </p>
          </div>
          <div className="job job-2">
            <h3>BrightCode</h3>
            <h6>Instructor</h6>
            <p>
              Led evening class sessions for 5-10 students covering the full
              stack involved in building web applications. Topics included
              HTML/CSS, Sass, Advanced JavaScript (i.e. functions, data
              structures, protoypical inheritance, OOP), Node, Express, as well
              as Database fundamentals.
            </p>
          </div>
          <div className="job job-3">
            <h3>ISACA Cybersecurity Club</h3>
            <h6>Executive Director of Outreach</h6>
            <p>
              Worked on the executive board of the Cybersecurity club at Baruch
              College, sponsored by the Information Systems Audit and Control
              Association (ISACA). Coordinated logistics for the first ever
              Technology Career Exposition at Baruch with over 115 students in
              attendance, as well as 25 industry professionals.
            </p>
          </div>
        </div>
      </Layout>
    </div>
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

export default About
