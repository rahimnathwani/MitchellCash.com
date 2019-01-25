import React from 'react'
import { graphql } from "gatsby"
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import { FaRegClock } from 'react-icons/fa';
import Layout from './layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Row>
        <Col sm="2"></Col>
        <Col>
          <article>
            <small className="text-muted">{post.frontmatter.date} | <FaRegClock /> </small>
            <h1 className="font-weight-bold">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
           </article>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
      }
    }
  }
`
