import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <div>
      <Layout pageId="contact" currentIdx={3}>
        <SEO title="Contact" />
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">
          Feel free to send me an email or message on LinkedIn. I'm always open
          to new opportunities!
        </h2>
        <div className="boxes">
          <a
            href="mailto:mikemcmanus95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span className="text-secondary">Email:</span>{" "}
              Mikemcmanus95@gmail.com
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mikemcmanus95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span className="text-secondary">LinkedIn:</span> MikeMcmanus95
            </div>
          </a>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
