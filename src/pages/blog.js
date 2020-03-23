import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Typography } from '@creditas/typography'

import {Layout} from '../components/Layout'
import {ArticlePreview} from '../components/ArticlePreview'
import {ArticleList} from '../components/ArticleList'
import {Wrapper} from '../components/Wrapper'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <Typography variant="h1">Blog</Typography>
        <Wrapper>
          <Typography variant="h3">Recent articles</Typography>
          <ArticleList>
            {posts.map(({ node }) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))}
          </ArticleList>
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
