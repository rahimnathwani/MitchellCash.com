import React from 'react'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import { FaEnvelopeSquare, FaGithubSquare, FaHackerNewsSquare } from 'react-icons/fa';
import Layout from '../layout/layout'

export default () => (
  <Layout>
    <Row>
      <Col sm="2"></Col>
      <Col>
        <Row>
          <Col>
            <h1 class="display-4">Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Howdy, I'm Mitchell Cash and here is how to contact me:</p>
            <ul class="list-unstyled ml-0">
              <li>
                <FaEnvelopeSquare className="mr-2"/>
                <script> var email_addr = "llehctim".split("").reverse().join("") + String.fromCharCode(2 * 0x20) + "hsacllehctim".split("").reverse().join("") + "." + "moc".split("").reverse().join(""); document.write("\x3ca class='first' href='mailto:" + email_addr + "'\x3e" + email_addr + "\x3c/a\x3e"); </script>
                <a class="first" href="mailto:mitchell@mitchellcash.com">mitchell@mitchellcash.com</a>
                <noscript>Email address protected from spambots; use a JavaScript-enabled browser to see it.</noscript>
              </li>
              <li>
                <FaGithubSquare className="mr-2" />
                <a href="https://github.com/mitchellcash ">GitHub</a>
              </li>
              <li>
                <FaHackerNewsSquare className="mr-2" />
                <a href="https://news.ycombinator.com/user?id=MitchellCash">Hacker News</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
      <Col sm="2"></Col>
    </Row>
  </Layout>
)
