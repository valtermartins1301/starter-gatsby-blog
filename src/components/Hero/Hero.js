import React from 'react'
import Img from 'gatsby-image'
import {styled} from '@creditas/stylitas'

import styles from './hero.styles.js'

import {Details} from './Details'


const HeroRaw = ({ className, data }) => (
  <div className={className}>
    <Img alt={data.name} fluid={data.heroImage.fluid}/>
    <Details data={data} />
  </div>
)

const Hero = styled(HeroRaw)`
  ${styles}
`

export { Hero }