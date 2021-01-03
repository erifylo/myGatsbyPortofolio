import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import Slide from "react-reveal/Slide"
import Zoom from "react-reveal/Zoom"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  console.log(nodes[0])
  const { title, info, stack, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="about web dev" />
      <section className="about-page">
        <div className="section-center about-center">
          {/* <Image fluid={image.childImageSharp.fluid} className="about-img" /> */}
          <div className="item">
            <div className="polaroid">
              <section>
                <img
                  src="https://i.ibb.co/sP8pzkq/IMG-20191110-204435.jpg"
                  alt="profilePicture"
                ></img>
              </section>
            </div>
          </div>
          <article className="about-text">
            <Slide right>
              {" "}
              <Title title={title} />{" "}
            </Slide>
            <Zoom>
              <p>{info}</p>{" "}
            </Zoom>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
