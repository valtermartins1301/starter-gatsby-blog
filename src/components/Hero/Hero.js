import React from 'react'
import Img from 'gatsby-image'
import {styled} from '@creditas/stylitas'

import styles from './hero.styles.js'

import {Details} from './Details'


const Image = styled(Img)`
  max-height: 30em;
  padding: 0;
`


const HeroRaw = ({ className, data }) => (
  <div className={className}>
    <Image alt={data.name} fluid={data.heroImage.fluid}/>
    {data.shortBio && (
      <Details data={data} />
    )}
  </div>
)

const Hero = styled(HeroRaw)`
  ${styles}
`

export { Hero }