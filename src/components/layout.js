import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Verde Lds &bull; Crafted with <span role="img" aria-label="love">❤️</span> </p>
        <p><small>branch: {process.env.BRANCH} </small></p>
      {trackCustomEvent({
                category: "pageview",
                action: "view",
                label: "branch",
                value:  process.env.BRANCH
                // string - required - The object that was interacted with (e.g.video)
              })  }
    
      </footer>
      
    </div>
  )
}
