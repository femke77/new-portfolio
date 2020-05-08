import React from "react";
import { Col, Row, Container } from 'react-bootstrap';

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col md={12} style={{minHeight: 380, textAlign: 'center', marginTop: 150}}>
            <h1 style={{color: 'white'}} >404 Page Not Found</h1>
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