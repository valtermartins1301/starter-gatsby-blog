import React from 'react'
import {styled} from '@creditas/stylitas'
import styles from './details.styles'

const DetailsRaw = ({ className, data }) => (
  <div className={className}>
    <h3>{data.name}</h3>
    <h4>{data.title}</h4>
    <p>{data.shortBio.shortBio}</p>
  </div>
)

const Details = styled(DetailsRaw)`
  ${styles}
`

export { Details }