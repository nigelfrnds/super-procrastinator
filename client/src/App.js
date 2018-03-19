import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import reducers from './reducers';
import STORE from './store';


import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Provider store={STORE}>
        <div className="App">
          <Router>
            <div>
              <Header />
              <div className="container-fluid">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
              </div>
              <Footer />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
