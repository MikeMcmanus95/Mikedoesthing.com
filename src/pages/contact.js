import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <div>
      <Layout pageId="contact">
        <SEO title="contact" />
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>{" "}
            Mikemcmanus95@gmail.com
          </div>
          <div>
            <span className="text-secondary">LinkedIn:</span> xxx-xxx-xxxx
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
