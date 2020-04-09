import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider, styled } from '@creditas/stylitas'
import tokens from '@creditas/tokens'
import {Container} from '@creditas/layout'
import {Header} from '../Header'
import {Global} from '@creditas/global'

const Body = styled.div`
  background-color: #f8f8f8;
  overflow: hidden;
`

const Layout = ({ children, siteTitle }) => (
  <ThemeProvider theme={{ ...tokens }}>
    <Header />
    <Body>
      <Helmet title={siteTitle} />
      <Global/>

      <Container fixed={true}>
        {children}
      </Container>
    </Body>
  </ThemeProvider>
)

export { Layout }
