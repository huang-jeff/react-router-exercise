import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="application">
            <div className="container">
              <NavBar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/page1/:name?' component={Page1} />
                <Route exact path='/page2/:name1?/:name2?' component={Page2} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
