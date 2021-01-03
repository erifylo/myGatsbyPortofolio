import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Project from "../components/Project"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <Layout>
    <SEO title="Projects" description="Projects" />
    <section className="projects-page">
      <Projects projects={projects} title="all projects"/>
    </section>
  </Layout>

}

export const query = graphql`
  {
    __typename
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
