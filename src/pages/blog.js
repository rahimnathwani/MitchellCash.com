import React from 'react'
import { Link, graphql } from 'gatsby'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Layout from '../layout/layout'

export default ({ data }) => {
  return (
    <Layout>
      <Row>
        <Col sm="2"></Col>
        <Col>
          <Row className="mb-3">
            <Col>
              <h1 class="display-4">Blog</h1>
              <small>Subscribe <a href="/feed.xml">via RSS</a>.</small>
            </Col>
          </Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Row key={node.id} className="mb-3">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Subtitle className="text-muted mb-2"><small>{node.frontmatter.date}</small></Card.Subtitle>
                    <Link to={node.fields.slug}>
                      <Card.Title>{node.frontmatter.title}</Card.Title>
                    </Link>
                    <Link to={node.fields.slug}>
                      <Card.Text className="text-muted">{node.excerpt}</Card.Text>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
