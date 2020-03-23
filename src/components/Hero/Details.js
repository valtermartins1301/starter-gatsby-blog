import React from 'react'
import {styled} from '@creditas/stylitas'
import styles from './details.styles'
import { Typography } from '@creditas/typography'

const DetailsRaw = ({ className, data }) => (
  <div className={className}>
    <Typography variant="h3" color="#fff">{data.name}</Typography>
    <Typography variant="h6" color="#fff">{data.title}</Typography>
    <Typography variant="paragraph" color="#fff">{data.shortBio.shortBio}</Typography>
  </div>
)

const Details = styled(DetailsRaw)`
  ${styles}
`

export { Details }