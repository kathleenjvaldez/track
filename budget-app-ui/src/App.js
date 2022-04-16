import { React } from "react";
import Main from "./Main";
import GlobalStyles from "./styles/GlobalStyles";
import Nav from "./Nav";
import Details from "./Details";
import "./styles/index.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Nav />
        <Main />
        <Details />
      </Container>
    </>
  );
}

export default App;
