import React from 'react';
import logo from './logo.svg';
import { NavBar } from './components';
import { Route, Redirect } from 'react-router-dom';
import Home from './view/Home';
import './App.css';
import * as Movies from './api/Movies/Movies';

export default class NetflixReact extends React.Component {
  state = {
    movieJumbotron: {},
    movies: {
      comedyMovies: [],
      animationMovies: [],
      scifiMovies: [],
      horrorMovies: [],
      lastestMovies: []
    },
    favoriteList: [],
    fetchedMovies: [],
    isInputClosed: true,
    avatarPhoto: ''
  }

  componentDidMount() {
    Movies.getMostPopular().then(res => this.setState({ movieJumbotron: res }));
    Movies.getInTheater().then(res => this.setState({ movies: { ...this.state.movies, lastestMovies: res } }));
    Movies.getByGenrer('Comédia').then(res => this.setState({ movies: { ...this.state.movies, comedyMovies: res } }));
    Movies.getByGenrer('Animação').then(res => this.setState({ movies: { ...this.state.movies, animationMovies: res } }));
    Movies.getByGenrer('Ficção científica').then(res => this.setState({ movies: { ...this.state.movies, scifiMovies: res } }));
    Movies.getByGenrer('Terror').then(res => this.setState({ movies: { ...this.state.movies, horrorMovies: res } }));
  }

  doSearch = query => {
    Movies.search(query).then(res => this.setState({ fetchedMovies: res }));
  }

  render() {
    return (
      <div className="app">
        <NavBar
          onSearchMovies={query => this.doSearch(query)}
          onCollapseInputHandler={() => this.setState({ isInputClosed: true })}
          onExpandInputHandler={() => this.setState({ isInputClosed: false })}
        />
        <Route exact path='/' render={() => (
          // !this.state.isInputClosed && this.state.fetchedMovies.length
          // ? <Redirect to="/search" />
          // : 
          <Home
              movies={this.state.movies}
              movieJumbotron={this.state.movieJumbotron}
              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        {/* <Route path='/favorites' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
          ? <Redirect to="/search" />
          : <ListMovies
              title="Minha Lista"
              movies={this.state.favoriteList}
              favoriteList={this.state.favoriteList}
              onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        <Route path='/search' render={() => (
          <ListMovies
            title="Resultados da Pesquisa"
            movies={this.state.fetchedMovies}
            favoriteList={this.state.favoriteList}
            onAddListPressed={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} /> */}
      </div>
    )
  }

}