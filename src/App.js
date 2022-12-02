import React from "react";
import styled from "styled-components";
import BoasVindas from "./components/BoasVindas";
import Jogo from "./components/Jogo";
import Contador from "./components/Contador";

export default function App() {

  return (
    <AppCx>
      <BoasVindas />
      <Jogo />
      <Contador />
    </AppCx>
  )
}

const AppCx = styled.div`
  min-width: 360px;
  min-height: 667px;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;