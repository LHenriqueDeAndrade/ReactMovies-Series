import React, { Component } from "react";
import axios from "axios";
import * as S from "../styles.js";

const FilmesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=d595a5668e695d5eceb1a3afe07cbd87&language=en-US&page=1",
});
console.log(FilmesApi);

export default class Movies extends Component {
  state = {
    movies: [],
    FilterMovies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const resposta = await FilmesApi.get();
    console.log(resposta);

    const allFilmes = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });
    this.setState({
      movies: allFilmes,
      FilterMovies: allFilmes,
    });
    console.log(allFilmes);
  };

  handleChange = (event) => {
    const ListaFiltrada = this.state.movies.filter((item) => {
      if (
        item.original_title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return "";
      }
    });
    this.setState({
      FilterMovies: ListaFiltrada,
    });
    console.log(this.state.FilterMovies);
  };

  render() {
    return (
      <S.MovieTab>
        <S.Search onChange={this.handleChange} placeholder="🎥 Movie Name" />
        {this.state.FilterMovies.map((item, index) => (
          <div key={index}>
            <ul>
              <S.OrigTitle>{item.original_title}</S.OrigTitle>
              <S.Overview>{item.overview}</S.Overview>
              <li>{item.vote_average}</li>
            </ul>
            <S.Covers src={item.image} alt="posters" />
          </div>
        ))}
      </S.MovieTab>
    );
  }
}
