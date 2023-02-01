import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/profileImage"

const About = ({ data }) => {
  const resumePath = data?.allFile?.edges[0]?.node?.publicURL

  return (
    <div>
      <Layout pageId="about" currentIdx={1}>
        <SEO title="About" />
        <h2 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h2>
        <h2 className="sm-heading">Let me tell you about myself...</h2>
        <div className="about-info">
          <Image portraitClass="bio-image" imgPath="profile.png" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I'm a seasoned software engineer with experience in both front-end
              and back-end development. I've worked at cool companies like
              Google and Bloomberg where I was able to demonstrate my ability to
              build engaging UIs, increase performance, and collaborate with
              teams. With a focus on creating elegant and scalable solutions,
              I've developed various personal projects including a Reddit Clone
              using NextJS, a Dating App PWA, and a meal planning app for iOS.
              In addition to my main work, I've also served as an instructor,
              teaching programming skills to students and guiding them through
              projects. In my free time you can find me at the gym, cooking, or
              playing video games. You can view my full resume{" "}
              <a
                className="text-secondary"
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              or take a quick glance at some of my experience below.
            </p>
          </div>
          <div className="job job-1">
            <h3>Google</h3>
            <h6>Software Engineer, July 2022 - Jan 2023</h6>
            <p>
              Worked on the web surface for Google One, a subscription service
              for preimum Google features. During my time there I implemented a
              custom HTTP error page, increased integration test coverage by
              over 50%, worked on A/B testing and experimentation to make UI
              changes based on user interation data, and assisted in
              consolidating various libraries for their purchase flow system.
            </p>
          </div>
          <div className="job job-2">
            <h3>Bloomberg LP</h3>
            <h6>Software Engineer, Jan 2021 - Jun 2022</h6>
            <p>
              Was part of the Data License team, which packaged Bloomberg's
              financial datasets and delivered them to various clients. I
              created an internal file deletion web platform using React and
              TypeScript, increasing productivity of support teams. I also
              optimized a legacy backend service with a Redis caching layer,
              reducing the number of SQL queries by over 25%. Lastly, I had the
              chance to collaborate with senior engineers to containerize 2
              legacy services for improved local development with Docker.
            </p>
          </div>
          <div className="job job-3">
            <h3>Woz-U</h3>
            <h6>Instructor, May 2021 - Jun 2021</h6>
            <p>
              Led instruction for 15 students in Java, Database, and UNIX/Linux
              fundamentals. Implemented and contributed to 10 lesson plans
              covering 240 hours of instruction. Increased student grade
              performance by 20% by developing and administering supplementary
              exams each week.
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
