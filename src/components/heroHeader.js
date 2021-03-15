import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        <a href='https://www.gofundme.com/f/verde-recycled-house' className="button -primary">GoFundMe Project &rarr;</a>
        <a href='https://maps.verde-tl.com' className="button -primary">Map Recycle Bins &rarr;</a>
        
      </div>
    )}
  />
)
