import React from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Container from "./components/GameContainer";
import Word from "./components/Word";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Figure />
        <WrongLetters />
        <Word />
      </Container>
    </>
  );
}

export default App;
