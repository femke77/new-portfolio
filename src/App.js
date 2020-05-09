import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
         
       
        <Footer />
      </Router>

    </>
  );
}

export default App;
