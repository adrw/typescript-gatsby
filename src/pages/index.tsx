import { Link } from "gatsby"
import * as React from "react"
import Layout from "../layouts"
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default ({ data }: IndexPageProps) => {
  const { siteName } = data.site.siteMetadata
  return (
    <Layout>
      <h1>{siteName}</h1>
      <p>
        This site is named <strong>{siteName} </strong>
        I wonder what will happen now.
        Let's see what happens now. I am just going to type a bit more.
        Hmmm this doesn't seem to always work since it sometimes seems to die on me but ah well we'll make it last.
      </p>
      <Link to="/about-css-modules/">Test Link to CSS</Link>
      <div>
        <h1>Richard Hamming on Luck</h1>
        <div>
          <p>
            From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
              You and Your Research
            </a>”.
          </p>
          <blockquote>
            <p>
              There is indeed an element of luck, and no, there isn’t. The prepared
              mind sooner or later finds something important and does it. So yes, it
              is luck.{" "}
              <em>
                The particular thing you do is luck, but that you do something is
                not.
              </em>
            </p>
          </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
      </div>
    </Layout>
  )
}
