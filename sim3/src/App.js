import React, { Component } from 'react';
import {Provider} from 'react-redux';
import duxStore from './ducks/store'
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={duxStore}>
        <Router>
          <div className="App">
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
