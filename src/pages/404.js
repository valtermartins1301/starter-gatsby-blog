import React from 'react'
import { Typography } from "@creditas/typography";
import {Layout} from '../components/Layout'
import {Wrapper} from '../components/Wrapper'

class NotFound extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} siteTitle="not found">
        <Wrapper>
          <Typography variant="h3">Page not found</Typography>
        </Wrapper>        
      </Layout>
    )
  }
}

export default NotFound
