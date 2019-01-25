import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Layout from '../layout/layout'

export default ({ data }) => (
  <Layout>
    <Row>
      <Col sm="4"></Col>
      <Col sm="4">
        <Img fluid={data.file.childImageSharp.fluid} className="rounded-circle" />
        <h1 className="text-center display-4">Mitchell Cash</h1>
        <p className="text-center lead">Sort of geeky, sort of not.</p>
      </Col>
      <Col sm="4"></Col>
    </Row>
    <Row>
    <Col sm="4">
      <h6 class="text-center">My Projects</h6>
      <ul class="list-unstyled text-center">
        <li><small><a class="text-muted" href="https://cryptochart.io">CryptoChart</a></small></li>
        <li><small><a class="text-muted" href="https://github.com/mitchellcash/ownUp">ownUp</a></small></li>
      </ul>
    </Col>
    <Col sm="4">
      <h6 class="text-center">Stuff I Like</h6>
      <ul class="list-unstyled text-center">
        <li><small><a class="text-muted" href="https://agilebits.com/onepassword">1Password</a></small></li>
        <li><small><a class="text-muted" href="https://www.fastmail.com">FastMail</a></small></li>
        <li><small><a class="text-muted" href="https://mullvad.net">Mullvad</a></small></li>
      </ul>
    </Col>
    <Col sm="4">
      <h6 class="text-center">Open Source Contributions</h6>
      <ul class="list-unstyled text-center">
        <li><small><a class="text-muted" href="https://github.com/bitcoin/bitcoin/commits?author=mitchellcash">bitcoin/bitcoin</a></small></li>
        <li><small><a class="text-muted" href="https://github.com/bitcoin-dot-org/bitcoin.org/commits?author=mitchellcash">bitcoin-dot-org/bitcoin.org</a></small></li>
        <li><small><a class="text-muted" href="https://github.com/mitchellcash/">and more...</a></small></li>
      </ul>
    </Col>
    </Row>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`