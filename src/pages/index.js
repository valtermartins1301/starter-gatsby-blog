import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { ActionLink } from '@creditas/button';
import { Typography } from "@creditas/typography";
import { styled } from "@creditas/stylitas";
import banner from "../images/pill-banner-tv-campaign.jpg" // Tell Webpack this JS file uses this image

import {Layout} from '../components/Layout'
import {Wrapper} from '../components/Wrapper'
import {ArticleList} from '../components/ArticleList'
import {CardText} from '../components/CardText'
import { Grid } from '@creditas/layout';

const Pill = styled.div`
  position: relative;
  z-index: 2;
  // margin: 2rem 5rem;

  > * {
    position: absolute;
    left: 3vw;
    width: 29vw;
    top: 5vh;
    z-index: 1;
  }

  :after {
    content: '';
    border-radius: 65rem;
    transform: rotate(-50deg);
    display: inline-block;
    position: absolute;
    overflow: hidden;
    padding: 400px 750px;
    right: -290px;
    top: 190px;
    background-color: #24bb78;      
    z-index: 0;
  }
`


const Title = styled.div`
  position: relative;
  margin-top: 5em;
`

const Figure = styled.figure`
  img {
    max-width: 50rem;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`

const Products = styled.div`
  margin: auto;
  position: absolute;
  bottom: 15vh;
  left: 25vw;
`

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allContentfulProduct.edges')

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <Section>
          <Grid container>
            <Grid item colStart={1} colEnd={5}>
              <Title>
                <Pill>
                  <div>
                    <Typography variant='h1' color='#fff'> Empréstimo com Garantia</Typography>
                    <Typography variant='h4' color='#fff'> Seu carro é garantia das melhores soluções</Typography>
                  </div>
                </Pill>
              </Title>
            </Grid>
            <Grid item colStart={7} colEnd={3}>
              <Figure> 
                <img src={banner} alt="Mulher segurando chave de um carro com o chaveiro da Creditas."/>          
              </Figure>
            </Grid>
          </Grid>
          <Products>
            <Wrapper width='800px'>
              <ArticleList>
                {products.map(({ node }) => (
                  <li key={node.productPage.slug}>
                    <CardText
                      variant="horizontal"
                      title={node.title}
                      icon={node.icon}
                      body={(
                        <div>
                          {node.minimalRange && (
                            <div>
                              <Typography variant="paragraph">De R$</Typography>
                              <Typography variant="form">{`${node.minimalRange} mil até R$ ${node.maximumRange} ${node.maximumUnit}`}</Typography>            
                              <br/>
                            </div>
                          )}
                          <Typography 
                            variant="paragraph"
                            dangerouslySetInnerHTML={{
                              __html: node.resume.childMarkdownRemark.html,
                            }}
                          />
                        </div>
                      )}
                      action={(<ActionLink style={{ paddingLeft: 0 }}>Simule</ActionLink>)}
                    />
                  </li>
                ))}
              </ArticleList>
            </Wrapper>
          </Products>
        </Section>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProduct {
      edges {
        node {
          title
          resume {
            childMarkdownRemark {
              html
            }
          }
          minimalRange
          maximumRange
          maximumUnit
          icon {
            fluid(maxWidth: 100, maxHeight: 100, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }          
          }
          productPage {
            slug
            heroImage {
              fluid(maxWidth: 100, maxHeight: 100, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
