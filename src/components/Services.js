import React from "react"
import Title from "./Title"
import services from "../constants/services"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Services = () => {



  return <section className="section bg-grey">
      
  <Title title="Skills" />  
    <div className="section-center services-center">
      {services.map((service) => {
       const {id, icon, title, text} = service
        return      <Zoom top><article key={id} className="service">
       

          {icon}
      
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
          
        </article>
        </Zoom>
       
      })}
    </div>
  </section>
}

export default Services
