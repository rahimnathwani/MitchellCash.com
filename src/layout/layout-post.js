import React from 'react'
import { graphql } from 'gatsby'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import { FaRegClock } from 'react-icons/fa'
import Layout from './layout'
import styles from './layout-post.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Row>
        <Col lg="2"></Col>
        <Col xs={12} lg={8}>
          <article className={styles.postContent}>
            <h1 className="">{post.frontmatter.title}</h1>
            <p className={styles.postDate}><small className="text-muted mb-4">{post.frontmatter.date} | <FaRegClock /> {post.fields.readingTime.text}</small></p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </Col>
        <Col lg="2"></Col>
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
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
