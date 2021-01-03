import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"


const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/erifylo",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/erifyli-evangelou/",
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
    url: "mailto:erif.evangelou@gmail.com",
  },
 /*  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/erifyli",
  }, */
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
