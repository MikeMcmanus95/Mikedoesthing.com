import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"

const About = () => {
  return (
    <div>
      <Layout pageId="about">
        <SEO title="About" />
        <h2 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h2>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <Image portraitClass="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              quibusdam doloribus perspiciatis harum mollitia voluptatibus
              dolores vero nisi illum assumenda incidunt molestiae corporis
              asperiores ab dolorem quis eveniet, quam voluptates.
            </p>
          </div>
          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Fullstack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptas nesciunt fugiat molestiae vero consectetur ipsam
              molestias laborum perferendis fugit.
            </p>
          </div>
          <div className="job job-2">
            <h3>ABC Designers</h3>
            <h6>Frontend Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptas nesciunt fugiat molestiae vero consectetur ipsam
              molestias laborum perferendis fugit.
            </p>
          </div>
          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Software Engineer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              voluptas nesciunt fugiat molestiae vero consectetur ipsam
              molestias laborum perferendis fugit.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
