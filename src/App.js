import React from 'react';
import logo from './logo.svg';
import { NavBar } from './components';
import './App.css';

export default class NetflixReact extends React.Component {


  render() {
    return (
      <div className="app">
        <NavBar
          onSearchMovies={query => this.doSearch(query)}
          onCollapseInputHandler={() => this.setState({ isInputClosed: true })}
          onExpandInputHandler={() => this.setState({ isInputClosed: false })}
        />
      </div>
    )
  }

}