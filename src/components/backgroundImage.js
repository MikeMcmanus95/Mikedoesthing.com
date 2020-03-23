import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BackgroundSection = ({ id }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          id={id}
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export default StyledBackgroundSection
