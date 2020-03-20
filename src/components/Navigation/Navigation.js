import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.styles'
import { styled } from '@creditas/stylitas'

const NavigationRaw = ({ className }) => (
  <nav className={className} role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

const Navigation = styled(NavigationRaw)`
  ${styles}
`

export { Navigation }