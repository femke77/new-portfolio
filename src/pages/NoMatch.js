import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">

            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>

        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;