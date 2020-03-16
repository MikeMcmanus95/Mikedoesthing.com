import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CSS from "../css/HeaderSection.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the gatsby crash course</p>
    <div className={CSS.profileImgContainer}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
