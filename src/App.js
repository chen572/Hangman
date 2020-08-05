import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution/Solution';
import Score from './components/Score/Score'
import Letters from './components/Letters/Letters';

export class App extends Component {

  render() {
    return (
      <div>
        <Score />
        <Solution />
        <Letters />
      </div>
    )

  }
}

export default App;
