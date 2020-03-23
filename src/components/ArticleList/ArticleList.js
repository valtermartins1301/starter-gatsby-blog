import React from 'react'
import { styled } from '@creditas/stylitas'
import styles from "./articleList.styles";

const ArticleListRaw = ({className, children}) => (
  <ul className={className}>
    {children}
  </ul>
)

const ArticleList = styled(ArticleListRaw)`
  ${styles}
`

export {ArticleList}