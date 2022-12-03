import React, { useState } from "react";
import styled from "styled-components";
import BoasVindas from "./components/BoasVindas";
import Jogo from "./components/Jogo";
import Contador from "./components/Contador";
import questoes from "./questoes";

export default function App() {
  const [contagem, setContagem] = useState(0);

  return (
    <AppCx>
      <BoasVindas />
      <Jogo questoes={questoes} contagem={contagem} setContagem={setContagem} />
      <Contador questoes={questoes} contagem={contagem} />
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