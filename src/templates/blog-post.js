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
    const post = get(this, 'props.data.contentfulBlogPost')

    return (
      <Layout location={this.props.location} siteTitle={`${post.title}`}>
        <Hero data={post} />
        <Wrapper>
          <Typography variant="h1">{post.title}</Typography>
          <Typography variant="support">
            {post.publishDate}
          </Typography>
          <br/>
          <Typography variant="paragraph"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
