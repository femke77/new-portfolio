import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={About} />
          <Route path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
          <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
