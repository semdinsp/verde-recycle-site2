import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import HeaderLogo from "../components/logo"

import {
  faCoffee,
  faAtom,
} from '@fortawesome/free-solid-svg-icons'

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
          <Link to="/">< HeaderLogo />{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Verde Lds &bull; Crafted with <span role="img" aria-label="love">❤️</span>
          <a href='https://www.facebook.com/VerdeRecycledHouse' className="buttonfb -primary">
            <span className="icon"><FontAwesomeIcon icon={faFacebookF} />   </span>
          </a>
          <a href='https://www.facebook.com/VerdeRecycledHouse' className="buttonfb -primary"><span className="icon"><FontAwesomeIcon icon={faInstagram} />   </span></a>
         </p>



      {trackCustomEvent({
                category: "pageview",
                action: "view",
                label: "branch",
                value:  gitbranch
                // string - required - The object that was interacted with (e.g.video)
              })  }

      </footer>

    </div>
  )
}
