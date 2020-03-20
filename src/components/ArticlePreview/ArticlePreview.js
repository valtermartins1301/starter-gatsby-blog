import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { styled } from '@creditas/stylitas'
import styles from './articlePreview.styles'

const ArticlePreviewRaw = ({ article, className }) => (
  <div className={className}>
    <Img alt="" fluid={article.heroImage.fluid} />

    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)

const ArticlePreview = styled(ArticlePreviewRaw)`
  ${styles}
`

export { ArticlePreview }
