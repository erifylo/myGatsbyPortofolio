import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from 'react-scroll';


const Footer = () => {
  return <footer className="footer">
    <div>
   
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <hr></hr>
      <h4>&copy;{new Date().getFullYear()} - Built with Gatsby
      | Design based on a project of:   <span><a href="https://github.com/john-smilga">John Smilga </a></span>
      | Implementation: Erifyli Evangelou</h4>
      
    </div>
  </footer>
}

export default Footer
