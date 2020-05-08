import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';

const cardStyle = {
  marginTop: 100,
  width: 400,
  height: 285,
  marginRight: 'auto',
  marginLeft: 'auto',
  textAlign: 'center',
  fontSize: 30,
}

function Contact() {
  return (
    <Container style={{ minHeight: 590 }}>
      <Row>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title style={{ fontSize: 36 }}>Contact Me</Card.Title>
            <Card.Text>
              <Card.Link href="mailto:megan.meyers.388@gmail.com?subject = Contact">megan.meyers.388@gmail.com</Card.Link>
              <br />
              Call or text: (661) 803-2187
            </Card.Text>
            <Card.Link href="https://www.linkedin.com/in/meg-meyers-11891757/">LinkedIn</Card.Link>
            <Card.Link href="https://github.com/femke77">Github</Card.Link>
            <br />
            <Card.Text>
              <Card.Link href="https://femke77.github.io/react_portfolio/src/pdf/resume 6.pdf" target="_blank">Resume</Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Contact;