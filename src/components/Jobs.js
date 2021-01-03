import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Flip from 'react-reveal/Flip';


const query = graphql`
  {
    __typename
    allStrapiJobs(sort: { fields: strapiId }) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)
  return (
    <section className="section jobs">
     <Flip top>   <Title title="Experience" /></Flip>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return <div key={item.id} className="job-desc">
             <FaAngleDoubleRight className="job-icon"/> 
             <p>{item.name}</p>
            </div>
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
