import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
const gitbranch=process.env.BRANCH

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
        <p><small>branch2: {gitbranch} </small></p>
        <p><small>branch3: {process.env.GATSBY_BRANCH} </small></p>
        <p><small>branch4: abbranchtest  test</small></p>
        <p><small>branch: {process.env.BRANCH} </small></p>
      <!--ADDED SCOTT  Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-E40TQXQZ7Y"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E40TQXQZ7Y');
      </script>
      
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
