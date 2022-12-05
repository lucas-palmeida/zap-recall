import styled from "styled-components";
import Pergunta from "./Pergunta";
import logo from "../assets/logo.png";

export default function Jogo({ questoes, contagem, setContagem }) {
  return (
    <JogoCx>
      <LogoCx>
        <img src={logo} alt="Logo" />
        <p>ZapRecall</p>
      </LogoCx>
      <ListaPerguntas>
        {questoes.map((questao, i) => {
          return (
            <Pergunta
              key={questao.question}
              index={i}
              questao={questao.question}
              resposta={questao.answer}
              contagem={contagem}
              setContagem={setContagem}
              data-test="flashcard"
            />
          );
        })}
      </ListaPerguntas>
    </JogoCx>
  );
}

const JogoCx = styled.div`
  min-width: 360px;
  min-height: 667px;
  padding-bottom: 70px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const LogoCx = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 42px;
  margin-bottom: 51px;
  img {
    width: 52px;
    height: 60px;
  }
  p {
    font-family: "Righteous", sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
`;

const ListaPerguntas = styled.ul`
  margin-bottom: 25px;
`;
