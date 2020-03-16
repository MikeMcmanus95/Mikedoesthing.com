import React from "react"
import background from "./hero-bg.jpg"

const Home = () => {
  return (
    <section
      className="s-home page-hero target-selection"
      data-image-src={background}
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="home-content">
        <div className="row home-content__main">
          <h3>Hello There.</h3>
          <h1>
            I am Michael Mcmanus. <br />
            I am a software engineer <br />
            based in New York City.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home
