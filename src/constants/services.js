import React from "react"
import { FaDesktop, FaDatabase, FaFileCode } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaDesktop className="service-icon" />,
    title: "Frontend",
    text: `I have developed projects in HTML, CSS, Javascript (ES6) and React, creating accesible and well-performing interfaces.`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "Backend",
    text: `I have worked with MongoDB, Node, Express and Axios, developing the server-side web application logic and integrating it to the front-end.`,
  },
  {
    id: 3,
    icon: <FaFileCode className="service-icon" />,
    title: "Fullstack",
    text: `I have worked using both my frontend and backend skills, please check in the projects section to see examples of my work.`,
  },
]
