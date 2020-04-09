import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Typography } from "@creditas/typography"

import {Layout} from '../components/Layout'
import {Hero} from '../components/Hero'
import { Wrapper } from '../components/Wrapper'

class BlogPostTemplate extends React.Component {
  render() {
    const landing = get(this, 'props.data.contentfulLanding')

    return (
      <Layout location={this.props.location} siteTitle={`${landing.title}`}>
        <Hero data={landing} />
        <Wrapper>
          <Typography variant="h1">{landing.title}</Typography>
          <Typography variant="support">
            {landing.publishDate}
          </Typography>
          <br/>
          <Typography variant="paragraph"
            dangerouslySetInnerHTML={{
              __html: landing.body.childMarkdownRemark.html,
            }}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query LandingsBySlug($slug: String!) {
    contentfulLanding(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
