import React, { Component } from "react";
import Home from "./Home.js";
import Movies from "../services/movies.js";
import Series from "../services/series.js";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "../styles.js";
import styled from "styled-components";

const DivRoutes = styled.div`
  background-color: lightyellow;
`;

class Header extends Component {
  render() {
    return (
      <DivRoutes>
        <BrowserRouter>
          <S.Title>CineFlix</S.Title>
          <nav>
            <S.Ul>
              <li>
                <S.Linker to="/">Home</S.Linker>
              </li>
              <li>
                <S.Linker to="/movies">Movies</S.Linker>
              </li>
              <li>
                <S.Linker to="/series">Series</S.Linker>
              </li>
            </S.Ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </BrowserRouter>
      </DivRoutes>
    );
  }
}

export default Header;
