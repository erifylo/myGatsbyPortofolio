import React from "react"
import Layout from "../components/Layout"
import Zoom from 'react-reveal/Zoom';
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout> 
        <SEO title="Contact" description="contact" />

  <section className="contact-page">
    <article className="contact-form">
      <h3>get in touch</h3>
     <Zoom>
      <form action="https://formspree.io/f/myybbaky" method="POST">
        <div className="form-group">
          <input type="text" placeholder="name" name="name" className="form-control"/>
          <input type="email" placeholder="email" name="email" className="form-control"/>
          <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
          <button type="submit" className="submit-btn btn">submit here</button>
        </div>
      </form>
      </Zoom>
    </article>
  </section>
  
  </Layout>
 )
}

export default contact
