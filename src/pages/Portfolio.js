import React from 'react';
import { Row, Card, CardDeck, Container } from 'react-bootstrap';
import crystal from '../images/crystal.png';
import music from '../images/music.jpg'
import ff from '../images/ff.png'
import food from '../images/foodfantasy.png'
import memory from '../images/kitty.png'
import trivia from '../images/trivia game.png'
import rps from '../images/rps-multi.png'
import crave from '../images/crave.png'
import cuccio from '../images/cuccio.png'
import word from '../images/screenshot2.jpg'
import scraper from '../images/scraper.png'
import books from '../images/react-google-books.png'

const deckStyle = {
  marginTop: 50,
  fontSize: 22,
  textAlign: 'center'
}

const cardTop = {
  // minHeight: 250,
  height: 'auto'
  /* object-fit: cover; */
}

function Portfolio() {
  return (
    <Container>
      <Row>
        <CardDeck style={deckStyle}>

          <Card>
            <Card.Img variant="top" src={crystal} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Crystal Collector Game</Card.Title>
              <Card.Text>
                JavaScript & JQuery game.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/unit-4-game/">Play the game
            </Card.Link>
              <Card.Link href="https://github.com/femke77/unit-4-game">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={ff} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Friend Finder</Card.Title>
              <Card.Text>
                Node app hosted on Heroku. Finds you your closest match from Curb Your Enthusiam. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://peaceful-beach-00204.herokuapp.com/">Go to the site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/friend-finder">See the code
            </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={food} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Giphy Food Fantasy</Card.Title>
              <Card.Text>
                Uses the Giphy API to display food of your choice. Click the GIFs to start/stop animation. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/Giphy-Fun/">Go to the site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/giphy-fun">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

        </CardDeck>
      </Row>

      <Row>
        <CardDeck style={deckStyle}>

          <Card>
            <Card.Img variant="top" src={memory} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Kitty-Kat Memory Game</Card.Title>
              <Card.Text>
              Front-end React App, hosted on Heroku. Can you beat my score? Its 13.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/memory/">Play the game
            </Card.Link>
              <Card.Link href="https://github.com/femke77/memory">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={trivia} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Seinfeld Trivia Game</Card.Title>
              <Card.Text>
                JavaScript & JQuery App using a lot of timeouts. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/TriviaGame">Play the game
            </Card.Link>
              <Card.Link href="https://github.com/femke77/triviagame">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={rps} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>RSP Multiplayer</Card.Title>
              <Card.Text>
                Firebase app using the Real-time database to host a 2-player rock, paper, scissors
                game. Chat up your opponent while you crush him!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/RPS-Multiplayer/">Play the game
            </Card.Link>
              <Card.Link href="https://github.com/femke77/rps-multiplayer">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

        </CardDeck>
      </Row>

      <Row>
        <CardDeck style={deckStyle}>

          <Card>
            <Card.Img variant="top" src={word} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Word Guess Game</Card.Title>
              <Card.Text>
              Hangman-style word guess game in JavaScript.            
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://femke77.github.io/Word-Guess-Game/">Play the game
            </Card.Link>
              <Card.Link href="https://github.com/femke77/Word-Guess-Game">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={scraper} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Mongo News Scraper</Card.Title>
              <Card.Text>
                Web app that scrapes WSJ.com, stores lead stories in MongoDB and allows you to
                save article and make/edit notes. Front-end using Handlebars.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://glacial-taiga-91523.herokuapp.com/">Go to site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/news-scraper">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={books} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Google Books</Card.Title>
              <Card.Text>
                React app that hits GoogleBooks API and saves to MongoDB.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://rocky-stream-88736.herokuapp.com/">Go to site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/react-google-books">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

        </CardDeck>
      </Row>

      
      <Row style={{color: 'white'}}><h1 style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>Team Projects</h1></Row>
      
      <Row>
   
        <CardDeck style={deckStyle}>
          
        <Card>
            <Card.Img variant="top" src={music} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Music Xpansion</Card.Title>
              <Card.Text>
                Webpage written in JS and hosted on Firebase. Uses YouTube and SeatGeek APIs
                to demo artist videos and find their concerts. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://deploy-f0b72.firebaseapp.com/">Go to the site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/muzic-xpansion">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          
          <Card>
            <Card.Img variant="top" src={crave} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Crave Recipes</Card.Title>
              <Card.Text>
                Node app using Handlebars for front-end and MySQL database for recipes. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://quiet-forest-24827.herokuapp.com/">Go to the site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/recipe-keeper">See the code
            </Card.Link>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={cuccio} style={cardTop} />
            <Card.Body>
              <Card.Title style={{ fontSize: 26 }}>Cuccio Pro</Card.Title>
              <Card.Text>
                React app with Node server and MySQL database. 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://cuccio-pro.herokuapp.com/">Go to the site
            </Card.Link>
              <Card.Link href="https://github.com/femke77/cuccio-pro">See the code
            </Card.Link>
            </Card.Footer>
          </Card>
          
        </CardDeck>

      </Row>

    </Container>

  )
}

export default Portfolio;