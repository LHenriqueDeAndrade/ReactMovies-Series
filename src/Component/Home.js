import React, { Component } from "react";
import styled from "styled-components";
import CineBkg from "../assets/Cinemacr.jpg";

const HomeSweetHome = styled.div`
  background: url(${CineBkg});
  background-repeat: no-repeat;
  background-color: goldenrod;
  background-size: contain;
  background-position: center;
  height: 80.7vh;
  h1 {
    color: gold;
    display: flex;
    justify-content: center;
    font-size: 4em;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeSweetHome>
        <h1>Welcome</h1>
      </HomeSweetHome>
    );
  }
}

export default Home;
