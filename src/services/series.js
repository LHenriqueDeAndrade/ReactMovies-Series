import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Maintenance from "../assets/underconstruction.jpg";

const SeriesApi = axios.create({
  baseURL: "empty",
});
console.log(SeriesApi);

const SeriesTab = styled.div`
  background: url(${Maintenance});
  background-color: gold;
  height: 80.7vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default class Series extends Component {
  state = {
    series: [],
    FilterSeries: [],
  };

  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get();
    console.log(resposta);

    const allSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });
    this.setState({
      series: allSeries,
      FilterSeries: allSeries,
    });
    console.log(allSeries);
  };

  handleChange = (event) => {
    const ListaFiltrada = this.state.series.filter((item) => {
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
      FilterSeries: ListaFiltrada,
    });
    console.log(this.state.FilterSeries);
  };

  render() {
    return (
      <SeriesTab>
        {this.state.FilterSeries.map((item, index) => (
          <div key={index}>
            <></>
          </div>
        ))}
      </SeriesTab>
    );
  }
}
