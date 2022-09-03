import styled from "styled-components";
import toDo from "../assets/toDo2-transformed.jpeg";

export const MyList = styled.div`
  background: url(${toDo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid;
  background-color: yellowgreen;
  width: 100%;
  height: 100vh;
  form {
    margin-top: 14.7vw;
    width: 40vw;
    height: 69vh;
    max-height: 69vh;
    overflow: auto;
  }
  input {
    border-width: 4px;
    margin-left: 14vw;
  }
  button {
    margin-left: 3px;
    border-radius: 5px;
    width: 70px;
    height: 1.8vw;
    background-color: lightgray;
    box-shadow: 3px 3px 0px black;
    margin-left: 4px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const listADD = styled.div`
  button {
    color: red;
    background-color: transparent;
    border: none;
    box-shadow: none;
    &:hover {
      cursor: pointer;
    }
  }
  label {
    font-weight: bold;
    font-size: 25px;
  }
`;

export const ADD = styled.input`
  border: solid;
  border-width: 6px;
  border-radius: 10px;
  ::placeholder {
    font-weight: bold;
  }
`;
