import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Roll from "react-reveal/Roll"
import Fade from "react-reveal/Fade"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <Fade top>
              <h1>Hi, I'm Erifyli</h1>
            </Fade>
            <Fade left>
              <h4>Web Developer based in Barcelona</h4>
            </Fade>
            <Link to="contact" className="btn">
              Contact Me
            </Link>
            <Fade top>
              <SocialLinks />
            </Fade>
          </div>
        </article>

        {/*  <Image fluid={fluid} className="hero-img" /> */}
      </div>
    </header>
  )
}

export default Hero
