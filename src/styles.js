import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Cine from "./assets/cinema.png";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const Title = styled.h1`
  color: gold;
  font-size: 4em;
`;

export const Li = styled.li`
  list-style: none;
  font-size: 2em;
  color: red;
`;

export const Linker = styled(Link)`
  list-style: none;
  color: goldenrod;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;
export const Linksa = styled(Link)`
  list-style: none;
  color: red;
  text-decoration: none;
  font-size: 3em;
`;

export const MovieTab = styled.div`
  width: 100%;
  background-color: red;
  background-color: black;
  /* background: url(${Cine}); */
  background-repeat: no-repeat;
  background-size: contain;
`;

export const OrigTitle = styled.h1`
  color: orange;
`;

export const Overview = styled.div`
  color: wheat;
  width: 30vw;
  display: flex;
  flex-direction: row;
`;

export const Search = styled.input`
  border: solid goldenrod;
  border-width: 6px;
  border-radius: 10px;
  ::placeholder {
    font-weight: bold;
  }
`;

export const Covers = styled.img`
  &:hover {
    transform: scale(1.2);
  }
`;
