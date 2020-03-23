import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { styled } from '@creditas/stylitas'
import { Card, CardMedia, CardContent } from '@creditas/card'
import { Typography } from '@creditas/typography'
import styles from './articlePreview.styles'

const ArticlePreviewRaw = ({ article, className }) => (
  <Link className={className} to={`/blog/${article.slug}`}>
    <Card>
      <CardMedia>
        <Img alt="" fluid={article.heroImage.fluid} />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1">{article.title}</Typography>
        <Typography variant="support">{article.publishDate}</Typography>
        <Typography variant="body1"
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </CardContent>
    </Card>
  </Link>
)

const ArticlePreview = styled(ArticlePreviewRaw)`
  ${styles}
`

export { ArticlePreview }
