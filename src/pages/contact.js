import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Contact us to work with us further in our various projects especially recyclinng and marketing services.  We are always looking to explore partnerships. &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact-recycle" data-netlify="true"  data-netlify-honeypot="bot-field" action="/success"  method="POST">
            <div>  
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact-recycle" />
            </div>
            <div>
              <label htmlFor="name">Name
              <input type="text" name="name" id="name" /></label>
            </div>
            <div>
              <label htmlFor="email">Email
              <input type="email" name="email" id="sender" /></label>
            </div>
            <div>
              <label htmlFor="subject">Subject
              <input type="text" name="subject" id="subject" /></label>
            </div>
            <div>
              <label htmlFor="message">Message
              <textarea name="message" id="message"> </textarea></label>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <button type="submit" className="button -primary" style={{marginRight: 0}}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
