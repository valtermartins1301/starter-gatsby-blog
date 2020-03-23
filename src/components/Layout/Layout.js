import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from '@creditas/stylitas'
import tokens from '@creditas/tokens'
import {Container} from '../Container'
import {Navigation} from '../Navigation'
import {Global} from '@creditas/global'

class Layout extends React.Component {
  render() {
    const { children, siteTitle } = this.props

    return (
      <ThemeProvider theme={{ ...tokens }}>
        <Helmet title={siteTitle} />
        <Global/>
        <Container>
          <Navigation />
          {children}
        </Container>
      </ThemeProvider>
    )
  }
}

export { Layout }
