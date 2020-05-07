import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
        
        </Container>
        <Switch>
          {/* <Route path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
