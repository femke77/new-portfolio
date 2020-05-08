import React from 'react';
import { Card, Row, Container } from 'react-bootstrap';
import img from '../images/IMG_4096.JPG';


//TODO: DRY w styling (use ... op)

const imgStyle = {
  maxHeight: 365,
  maxWidth: 331
}

const cardStyle = {
  maxWidth: 300,
  maxHeight: 366,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 50
}

const cardStyle2 = {
  maxWidth: 400,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 50,
  fontSize: 20
}

function About() {
  return (
    <Container style={{}}>
      <Row>
        <Card bg="light" style={cardStyle}>
          <Card.Img variant="top" src={img} style={imgStyle} />
        </Card>
        <Card bg="light" style={cardStyle2} >
          <Card.Body>
            <Card.Text>
              {/* TODO: Rewrite this crap */}
              I graduated with a BS in Computer Science 2018, with honors, and I am eagerly looking forward to putting my skills to work. 
              <br />
              I am lucky to have some innate traits that make me a naturally good coder, for example, I am very detail-oriented, patient, and logical. When combined with my love for collaboration and excellent social skills, I am unstoppable!
              <br /> <br />
              I just graduated UCLA Extension's Full Stack Boot Camp, and I want to work in web development. I do as much self-teaching as is feasible, but there is nothing like working with teams and having skilled developers helping you become a better programmer. This is what the boot camp gave me.
              <br />  <br />
              Other things I enjoy include cooking, baking, coding for pleasure, learning new things, taking online classes, and playing with my cat.
           </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>

  )
}

export default About;